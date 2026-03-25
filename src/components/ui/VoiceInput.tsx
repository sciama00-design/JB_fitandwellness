import { useState, useRef, useEffect } from 'react';
import { Mic, Square, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';
import { toast } from 'sonner';

interface VoiceInputProps {
  onResult?: (text: string) => void;
  onAudioBlob?: (blob: Blob) => void;
  isProcessing?: boolean;
  className?: string;
  variant?: 'icon' | 'button' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
}

export function VoiceInput({ 
  onResult, 
  onAudioBlob, 
  isProcessing = false, 
  className,
  variant = 'icon',
  size = 'md'
}: VoiceInputProps) {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        if (onAudioBlob) {
          onAudioBlob(audioBlob);
        } else if (onResult) {
          // Fallback: If parent only expects text, we need to transcribe it
          // In this architecture, it's better if the parent handles the service call
          // but we can provide a default transcription helper if needed.
        }
        
        // Stop all tracks to release the microphone
        stream.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      toast.error("Impossibile accedere al microfono. Controlla i permessi del browser.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  useEffect(() => {
    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 20
  };

  if (variant === 'minimal') {
    return (
      <button
        type="button"
        onClick={isRecording ? stopRecording : startRecording}
        disabled={isProcessing}
        className={cn(
          "transition-all flex items-center justify-center rounded-full",
          isRecording ? "text-red-500 animate-pulse" : "text-muted-foreground/40 hover:text-primary",
          className
        )}
      >
        {isProcessing ? (
          <Loader2 size={iconSizes[size]} className="animate-spin" />
        ) : isRecording ? (
          <Square size={iconSizes[size]} fill="currentColor" />
        ) : (
          <Mic size={iconSizes[size]} />
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={isRecording ? stopRecording : startRecording}
      disabled={isProcessing}
      className={cn(
        "relative flex items-center justify-center rounded-full transition-all shrink-0",
        sizeClasses[size],
        isRecording 
          ? "bg-red-500 text-white shadow-lg shadow-red-500/20" 
          : "bg-white/[0.05] text-muted-foreground/60 hover:text-foreground border border-white/5",
        isProcessing && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <AnimatePresence mode="wait">
        {isProcessing ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <Loader2 size={iconSizes[size]} className="animate-spin" />
          </motion.div>
        ) : isRecording ? (
          <motion.div
            key="stop"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <Square size={iconSizes[size]} fill="currentColor" />
          </motion.div>
        ) : (
          <motion.div
            key="mic"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <Mic size={iconSizes[size]} />
          </motion.div>
        )}
      </AnimatePresence>

      {isRecording && (
        <motion.div
          layoutId="pulse"
          className="absolute inset-0 rounded-full bg-red-500/30"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </button>
  );
}
