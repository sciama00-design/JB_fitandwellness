import { useState, useRef } from 'react';
import { Mic, Square, Loader2, Sparkles, X } from 'lucide-react';
import { geminiService } from '../../services/geminiService';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

interface VoiceCompilerProps {
  onResult: (result: { exercises: any[], transcription?: string, action_taken?: 'append' | 'modify' }) => void;
  libraryContext: any[];
  existingMappings: any[];
  currentPlan?: any[];
  preferences?: any[];
}

export default function VoiceCompiler({ onResult, libraryContext, existingMappings, currentPlan = [], preferences = [] }: VoiceCompilerProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) chunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        await processAudio(audioBlob);
        // Stop all tracks to release the microphone
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Impossibile accedere al microfono. Controlla i permessi.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const processAudio = async (blob: Blob) => {
    setIsProcessing(true);
    console.log("Start processing audio blob...", blob);
    try {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = async () => {
        const base64Audio = (reader.result as string).split(',')[1];
        console.log("Audio converted to base64. Sending to Gemini...");
        
        const result = await geminiService.processWorkoutAudio(
          base64Audio,
          libraryContext,
          existingMappings,
          currentPlan,
          preferences
        );

        console.log("Gemini result:", result);

        if (result && result.exercises) {
          onResult(result);
          setIsExpanded(false);
        } else {
          const errorMsg = "Non sono riuscito a estrarre esercizi dall'audio. L'AI ha risposto: " + (result ? JSON.stringify(result) : "Nessuna risposta.");
          alert(errorMsg);
          console.error(errorMsg);
        }
        setIsProcessing(false);
      };
    } catch (error) {
      console.error("Error processing audio:", error);
      alert("Errore tecnico durante il processamento audio: " + (error as Error).message);
      setIsProcessing(false);
    }
  };

  return (
    <AnimatePresence>
      {isExpanded ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-slate-900/90 backdrop-blur-2xl border border-white/10 p-6 rounded-[2.5rem] shadow-2xl w-80 space-y-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-black text-white uppercase tracking-widest italic">AI Voice Compiler</h4>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">Parla per creare la scheda</p>
              </div>
            </div>
            <button 
              onClick={() => setIsExpanded(false)}
              className="p-2 hover:bg-white/5 rounded-full text-slate-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col items-center justify-center py-8 gap-6">
            <div className="relative">
              {isRecording && (
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.2, 0.5] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="absolute inset-0 bg-red-500 rounded-full blur-2xl"
                />
              )}
              <button
                onClick={isRecording ? stopRecording : startRecording}
                disabled={isProcessing}
                className={cn(
                  "w-20 h-20 rounded-full flex items-center justify-center transition-all relative z-10",
                  isRecording 
                    ? "bg-red-500 shadow-lg shadow-red-500/40" 
                    : (isProcessing ? "bg-slate-800" : "bg-primary hover:scale-105 shadow-xl shadow-primary/30")
                )}
              >
                {isProcessing ? (
                  <Loader2 className="w-8 h-8 animate-spin text-white" />
                ) : isRecording ? (
                  <Square className="w-8 h-8 text-white fill-current" />
                ) : (
                  <Mic className="w-8 h-8 text-white" />
                )}
              </button>
            </div>

            <div className="text-center">
              <p className={cn(
                "text-xs font-black uppercase tracking-widest transition-colors",
                isRecording ? "text-red-400 animate-pulse" : (isProcessing ? "text-primary animate-pulse" : "text-slate-400")
              )}>
                {isRecording ? "In ascolto..." : (isProcessing ? "Analisi audio in corso..." : "Clicca per registrare")}
              </p>
              {!isRecording && !isProcessing && (
                <p className="text-[10px] text-slate-600 font-medium mt-2 max-w-[200px]">
                  Descrivi esercizi, set e reps. L'AI mapperà tutto alla libreria.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.button
          layoutId="voice-compiler-btn"
          onClick={() => setIsExpanded(true)}
          className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-white shadow-2xl shadow-primary/30 hover:scale-110 active:scale-95 transition-all group relative"
        >
          <Mic className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-500 rounded-full border-2 border-slate-950 flex items-center justify-center">
            <Sparkles className="w-2 h-2" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
