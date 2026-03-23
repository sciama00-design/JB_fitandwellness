import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface AthleteInfo {
  id: string;
  name: string;
}

interface AthleteNavigationContextType {
  activeAthlete: AthleteInfo | null;
  setActiveAthlete: (athlete: AthleteInfo | null) => void;
  showAthleteList: boolean;
  setShowAthleteList: (show: boolean) => void;
  athleteList: any[] | null;
  setAthleteList: (list: any[] | null) => void;
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
  expandedBranches: string[];
  setExpandedBranches: React.Dispatch<React.SetStateAction<string[]>>;
  toggleBranch: (id: string) => void;
}

const AthleteNavigationContext = createContext<AthleteNavigationContextType | undefined>(undefined);

export function AthleteNavigationProvider({ children }: { children: ReactNode }) {
  const [activeAthlete, setActiveAthlete] = useState<AthleteInfo | null>(null);
  const [showAthleteList, setShowAthleteList] = useState(false);
  const [athleteList, setAthleteList] = useState<any[] | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
    const saved = localStorage.getItem('jb_sidebar_open');
    if (saved !== null) return JSON.parse(saved);
    return window.innerWidth >= 768; // Default to closed on mobile
  });
  const [expandedBranches, setExpandedBranches] = useState<string[]>([]);

  useEffect(() => {
    localStorage.setItem('jb_sidebar_open', JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  const toggleBranch = (id: string) => {
    setExpandedBranches(prev => 
      prev.includes(id) 
        ? prev.filter(b => b !== id) 
        : [...prev, id]
    );
  };

  return (
    <AthleteNavigationContext.Provider value={{ 
      activeAthlete, 
      setActiveAthlete,
      showAthleteList,
      setShowAthleteList,
      athleteList,
      setAthleteList,
      isSidebarOpen,
      setIsSidebarOpen,
      expandedBranches,
      setExpandedBranches,
      toggleBranch
    }}>
      {children}
    </AthleteNavigationContext.Provider>
  );
}

export function useAthleteNavigation() {
  const context = useContext(AthleteNavigationContext);
  if (context === undefined) {
    throw new Error('useAthleteNavigation must be used within an AthleteNavigationProvider');
  }
  return context;
}
