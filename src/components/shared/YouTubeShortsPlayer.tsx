import { useEffect, useRef, useState, useCallback } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { extractYouTubeId } from '../../lib/videoUtils';
import { cn } from '../../lib/utils';

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: (() => void) | undefined;
  }
}

interface YouTubeShortsPlayerProps {
  url: string;
  className?: string;
  autoplay?: boolean;
}

// Singleton for API Loader
let apiReady = false;
let apiLoading = false;
const readyCallbacks: (() => void)[] = [];

function loadYouTubeAPI(): Promise<void> {
  return new Promise((resolve) => {
    if (window.YT && window.YT.Player) {
      apiReady = true;
      resolve();
      return;
    }
    if (apiReady) { resolve(); return; }
    readyCallbacks.push(resolve);
    if (apiLoading) return;
    apiLoading = true;

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    tag.async = true;
    document.head.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      apiReady = true;
      readyCallbacks.forEach((cb) => cb());
      readyCallbacks.length = 0;
    };
  });
}

export function YouTubeShortsPlayer({ url, className, autoplay = true }: YouTubeShortsPlayerProps) {
  const videoId = extractYouTubeId(url);
  const mountRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const intervalRef = useRef<any>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isEnded, setIsEnded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const hideTimeoutRef = useRef<any>(null);

  const resetHideTimeout = useCallback(() => {
    setShowControls(true);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    hideTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  }, []);

  useEffect(() => {
    let cancelled = false;

    if (!videoId) {
      setError('Invalid YouTube URL');
      return;
    }

    (async () => {
      await loadYouTubeAPI();
      if (cancelled || !mountRef.current) return;

      const el = document.createElement('div');
      el.id = `yt-protected-${Math.random().toString(36).substr(2, 9)}`;
      mountRef.current.innerHTML = '';
      mountRef.current.appendChild(el);

      playerRef.current = new window.YT.Player(el.id, {
        videoId,
        width: '100%',
        height: '100%',
        playerVars: {
          autoplay: autoplay ? 1 : 0,
          controls: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          playsinline: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (e: any) => {
            if (cancelled) return;
            setIsReady(true);
            setDuration(e.target.getDuration());
            
            // Unmute dynamically based on state
            if (isMuted) e.target.mute();

            try {
              const iframe = e.target.getIframe();
              iframe.style.width = '100%';
              iframe.style.height = '100%';
              iframe.style.position = 'absolute';
              iframe.style.top = '0';
              iframe.style.left = '0';
              iframe.style.pointerEvents = 'none';
            } catch { /* ignore */ }

            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => {
              const p = playerRef.current;
              if (!p) return;
              try {
                const t = p.getCurrentTime?.() ?? 0;
                const d = p.getDuration?.() ?? 0;
                setCurrentTime(t);
                if (d > 0) setDuration(d);
              } catch { /* ignored */ }
            }, 500);
          },
          onStateChange: (e: any) => {
            if (cancelled) return;
            switch (e.data) {
              case window.YT.PlayerState.PLAYING:
                setIsPlaying(true);
                setIsEnded(false);
                break;
              case window.YT.PlayerState.PAUSED:
                setIsPlaying(false);
                break;
              case window.YT.PlayerState.ENDED:
                setIsPlaying(false);
                setIsEnded(true);
                setShowControls(false);
                break;
            }
          },
          onError: () => setError('Video unavailable')
        },
      });
    })();

    return () => {
      cancelled = true;
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
      try { playerRef.current?.destroy(); } catch { /* ignore */ }
      playerRef.current = null;
    };
  }, [videoId, autoplay]); // isMuted not in deps deliberately to not recreate player

  const togglePlay = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    try {
      const state = p.getPlayerState();
      if (state === window.YT.PlayerState.PLAYING) {
        p.pauseVideo();
      } else {
        p.playVideo();
      }
    } catch { /* ignore */ }
  }, []);

  const toggleMute = useCallback(() => {
    const p = playerRef.current;
    if (!p) return;
    try {
      if (p.isMuted()) {
        p.unMute();
        setIsMuted(false);
      } else {
        p.mute();
        setIsMuted(true);
      }
    } catch { /* ignore */ }
  }, []);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    playerRef.current?.seekTo(time, true);
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (error) {
    return (
      <div className={cn("w-full aspect-[9/16] bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-slate-400 p-8 text-center border border-white/5", className)}>
        <p className="font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden bg-black select-none group', className)}
      onContextMenu={(e) => e.preventDefault()}
      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
    >
      {/* YT Player mount point */}
      <div
        ref={mountRef}
        className="absolute inset-0"
        style={{ pointerEvents: 'none' }}
      />

      {/* Transparent overlay blocks clicks on iframe directly */}
      <div
        className="absolute inset-0 z-10 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          if (showControls) {
            setShowControls(false);
            if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
          } else {
            resetHideTimeout();
          }
        }}
        aria-hidden="true"
      />

      {/* Loading State Overlay */}
      {!isReady && (
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black">
          <div className="h-10 w-10 border-4 border-primary-500/30 border-t-primary-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* End Screen / Replay */}
      {isEnded && (
        <div
          className="absolute inset-0 z-30 flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-pointer animate-in fade-in duration-300"
          onClick={(e) => {
            e.stopPropagation();
            playerRef.current?.seekTo(0, true);
            playerRef.current?.playVideo();
          }}
        >
          <div className="relative flex flex-col items-center gap-4">
            <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-transform hover:scale-110 active:scale-95">
              <Play className="w-8 h-8 text-black fill-current ml-1" />
            </div>
            <span className="text-xs font-black text-white uppercase tracking-[0.2em]">Riproduci</span>
          </div>
        </div>
      )}

      {/* Bottom Gradient for controls visibility */}
      <div className={cn(
        "absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-500 z-10",
        showControls ? 'opacity-100' : 'opacity-0'
      )} />

      {/* Control Bar */}
      <div
        className={cn(
          'absolute inset-x-0 bottom-0 z-20 p-6 pointer-events-none transition-opacity duration-500 ease-in-out',
          showControls ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="flex flex-col gap-5 pointer-events-auto">
          {/* Progress Slider */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-white/60 tabular-nums w-8 text-center bg-black/40 px-1 py-0.5 rounded-md">
              {formatTime(currentTime)}
            </span>

            <div
              className="relative flex-1 h-6 flex items-center cursor-pointer group/seek"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-x-0 h-1.5 rounded-full bg-white/20 overflow-hidden">
                <div
                  className="absolute left-0 h-full bg-primary-500 shadow-[0_0_10px_rgba(var(--primary-500),0.8)] transition-all duration-200"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div
                className="absolute h-4 w-4 rounded-full bg-white shadow-lg -translate-x-1/2 transition-transform duration-200 scale-0 group-hover/seek:scale-100"
                style={{ left: `${progressPercent}%` }}
              />
              <input
                type="range"
                min="0"
                max={duration || 100}
                value={currentTime}
                onChange={handleSeek}
                className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
                style={{ margin: 0 }}
              />
            </div>

            <span className="text-[10px] font-bold text-white/60 tabular-nums w-8 text-center bg-black/40 px-1 py-0.5 rounded-md">
              {formatTime(duration)}
            </span>
          </div>

          {/* Buttons Row */}
          <div className="flex items-center justify-between">
            <button
              onClick={(e) => { e.stopPropagation(); togglePlay(); resetHideTimeout(); }}
              className="h-12 w-12 flex items-center justify-center rounded-full bg-white shadow-lg text-black transition-all hover:scale-110 active:scale-95"
            >
              {isPlaying
                ? <Pause className="w-5 h-5 fill-current" />
                : <Play className="w-5 h-5 fill-current ml-1" />
              }
            </button>
            <div className="flex items-center gap-3">
              <button
                onClick={(e) => { e.stopPropagation(); toggleMute(); resetHideTimeout(); }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white backdrop-blur-md transition-all border border-white/5 hover:border-white/20"
              >
                {isMuted
                  ? <VolumeX className="w-5 h-5" />
                  : <Volume2 className="w-5 h-5" />
                }
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); handleFullscreen(); resetHideTimeout(); }}
                className="p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white backdrop-blur-md transition-all border border-white/5 hover:border-white/20"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
