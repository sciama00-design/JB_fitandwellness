import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, title, children }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4 perspective-[1000px]">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-background/60 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.95, rotateX: 10 }}
            animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, y: 100, scale: 0.95, rotateX: 10 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative glass-card w-full max-w-2xl rounded-t-[2.5rem] sm:rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] border-t border-white/10"
          >
            {/* Mobile handle */}
            <div className="w-full flex justify-center pt-3 pb-1 sm:hidden">
              <div className="w-12 h-1.5 bg-white/10 rounded-full"></div>
            </div>
            
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/5">
              <h2 className="text-2xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent italic tracking-tight">{title}</h2>
              <button 
                onClick={onClose}
                className="p-3 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/5 shadow-sm active:scale-90"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-5 sm:p-8 overflow-y-auto custom-scrollbar flex-1 pb-safe scroll-smooth">
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
