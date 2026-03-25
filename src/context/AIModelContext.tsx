import React, { createContext, useContext, useState, useEffect } from 'react';
import { geminiService, GEMINI_MODELS } from '../services/geminiService';

type AIModel = typeof GEMINI_MODELS[number];

interface AIModelContextType {
  selectedModel: AIModel;
  setSelectedModel: (model: AIModel) => void;
}

const AIModelContext = createContext<AIModelContextType | undefined>(undefined);

export const AIModelProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedModel, setSelectedModelState] = useState<AIModel>(() => {
    return (localStorage.getItem('selected_gemini_model') as AIModel) || 'gemini-2.5-flash-lite';
  });

  const setSelectedModel = (model: AIModel) => {
    setSelectedModelState(model);
    localStorage.setItem('selected_gemini_model', model);
    geminiService.setOverrideModel(model);
  };

  useEffect(() => {
    // Ensure geminiService is initialized with the stored model
    geminiService.setOverrideModel(selectedModel);
  }, []);

  return (
    <AIModelContext.Provider value={{ selectedModel, setSelectedModel }}>
      {children}
    </AIModelContext.Provider>
  );
};

export const useAIModel = () => {
  const context = useContext(AIModelContext);
  if (context === undefined) {
    throw new Error('useAIModel must be used within an AIModelProvider');
  }
  return context;
};
