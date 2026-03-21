import React, { useEffect } from 'react';
import { X } from 'lucide-react';

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-4">
      <div 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative glass w-full max-w-2xl rounded-t-[2.5rem] sm:rounded-3xl shadow-2xl overflow-hidden animate-slide-up sm:animate-in sm:zoom-in-95 duration-300 max-h-[90vh] flex flex-col">
        {/* Mobile handle */}
        <div className="w-full flex justify-center pt-3 pb-1 sm:hidden" onClick={onClose}>
          <div className="w-12 h-1.5 bg-white/20 rounded-full"></div>
        </div>
        
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-white/5">
          <h2 className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-xl transition-all"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-5 sm:p-6 overflow-y-auto custom-scrollbar flex-1 pb-safe">
          {children}
        </div>
      </div>
    </div>
  );
}
