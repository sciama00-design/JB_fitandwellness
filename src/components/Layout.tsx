import React, { useState, useEffect } from 'react';
import { useAuth } from '../lib/auth';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import { 
  Home, 
  Users, 
  Calendar as CalendarIcon, 
  Calculator, 
  BookOpen, 
  Dumbbell, 
  Apple, 
  LayoutDashboard,
  Menu,
  X,
  PanelLeftOpen
} from 'lucide-react';
import { MobileBottomNav } from './layout/MobileBottomNav';
import { DesktopSidebar } from './layout/DesktopSidebar';
import { useAthleteNavigation } from '../context/AthleteNavigationContext';
import { ATHLETE_TABS } from '../pages/coach/AthleteDetail';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Outlet, Navigate, Link } from 'react-router-dom';

export default function Layout({ children }: { children?: React.ReactNode }) {
  const { loading, user, role, signOut, initialized } = useAuth();
  const { 
    activeAthlete, 
    athleteList,
    setAthleteList,
    isSidebarOpen,
    setIsSidebarOpen,
    expandedBranches,
    setExpandedBranches,
    toggleBranch
  } = useAthleteNavigation();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileAthleteMenuOpen, setIsMobileAthleteMenuOpen] = useState(false);

  // Fetch athletes list for sidebar
  const { data: athletes } = useQuery({
    queryKey: ['coach-athletes-sidebar', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('coach_id', user?.id)
        .eq('role', 'athlete');
      
      if (error) throw error;
      return data;
    },
    enabled: !!user?.id && role === 'coach',
  });

  useEffect(() => {
    if (athletes) {
      setAthleteList(athletes);
    }
  }, [athletes, setAthleteList]);

  // Auto-expand branches based on route
  useEffect(() => {
    if (location.pathname.startsWith('/coach/athletes')) {
      const athleteIdMatch = location.pathname.match(/\/coach\/athletes\/([a-f0-9-]+)/);
      
      setExpandedBranches(prev => {
        const newBranches = prev.includes('atleti-root') ? [...prev] : ['atleti-root', ...prev];
        
        if (athleteIdMatch) {
          const id = athleteIdMatch[1];
          const athleteBranchId = `athlete-${id}`;
          
          // Filter out other athlete branches
          const filtered = newBranches.filter(b => !b.startsWith('athlete-') || b === athleteBranchId);
          
          if (!filtered.includes(athleteBranchId)) {
            filtered.push(athleteBranchId);
          }
          return filtered;
        } else {
          // If no athlete is active, collapse all athlete branches? 
          // The user said "altrimenti tutti compatti"
          return newBranches.filter(b => !b.startsWith('athlete-'));
        }
      });
    }
  }, [location.pathname]);

  // Scroll-to-hide logic for mobile
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 60) {
        setIsNavVisible(false);
      } else {
        setIsNavVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  if (loading || !initialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const navItemsCoach = [
    { to: '/coach', icon: Home, label: 'Home' },
    { to: '/coach/athletes', icon: Users, label: 'Atleti' },
    { to: '/coach/calendar', icon: CalendarIcon, label: 'Calendario' },
    { to: '/coach/diet', icon: Calculator, label: 'Dieta' },
    { to: '/coach/library', icon: BookOpen, label: 'Libreria' },
  ];

  const navItemsAthlete = [
    { to: '/athlete?tab=home', icon: Home, label: 'Home', tabId: 'home' },
    { to: '/athlete?tab=train', icon: Dumbbell, label: 'Allenati', tabId: 'train' },
    { to: '/athlete?tab=calendar', icon: CalendarIcon, label: 'Calendario', tabId: 'calendar' },
    { to: '/athlete/nutrition', icon: Apple, label: 'Cibo' },
    { to: '/athlete/planner', icon: LayoutDashboard, label: 'Planner' },
  ];

  const navItems = role === 'coach' ? navItemsCoach : navItemsAthlete;

  const athleteNavItems = activeAthlete ? ATHLETE_TABS.map(tab => ({
    to: `/coach/athletes/${activeAthlete.id}?tab=${tab.id}`,
    icon: tab.icon,
    label: tab.label,
    tabId: tab.id
  })) : [];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 overflow-x-hidden">
      <AnimatePresence>
        {isSidebarOpen && (
          <DesktopSidebar
            items={navItems}
            athleteNavItems={athleteNavItems}
            profile={user}
            onLogout={() => signOut()}
            role={role as any}
            athleteList={athleteList}
            expandedBranches={expandedBranches}
            toggleBranch={toggleBranch}
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
            activeAthleteId={activeAthlete?.id}
          />
        )}
      </AnimatePresence>

      <div className={clsx(
        "flex-1 flex flex-col min-h-screen transition-all duration-500 ease-in-out",
        isSidebarOpen ? "md:ml-72" : "md:ml-0"
      )}>
        {/* Floating Toggle Button (Visible when sidebar is closed) */}
        <AnimatePresence>
          {!isSidebarOpen && (
            <motion.button 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsSidebarOpen(true)}
              className="fixed top-6 left-6 z-40 w-11 h-11 rounded-2xl bg-card/60 backdrop-blur-xl border border-white/5 shadow-2xl flex items-center justify-center text-primary hover:bg-primary/20 transition-all group hidden md:flex"
            >
              <PanelLeftOpen size={22} className="group-hover:scale-110 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Mobile Athlete Menu Trigger (Floating) */}
        <AnimatePresence>
          {activeAthlete && (
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={() => setIsMobileAthleteMenuOpen(!isMobileAthleteMenuOpen)}
              className="md:hidden fixed top-4 right-4 z-40 w-10 h-10 rounded-xl bg-primary/10 backdrop-blur-xl border border-primary/20 shadow-xl flex items-center justify-center text-primary"
            >
              {isMobileAthleteMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          )}
        </AnimatePresence>

        {/* Mobile Athlete Menu Overlay */}
        <AnimatePresence>
          {isMobileAthleteMenuOpen && activeAthlete && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileAthleteMenuOpen(false)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] md:hidden"
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                className="fixed top-0 left-0 bottom-0 w-80 bg-card/90 backdrop-blur-2xl z-50 md:hidden border-r border-white/5 p-6 flex flex-col"
              >
                <div className="mb-8">
                  <p className="text-[10px] uppercase font-black text-primary/60 tracking-[0.3em] mb-1">Menu Atleta</p>
                  <h3 className="text-2xl font-black text-foreground italic uppercase tracking-tighter">
                    {activeAthlete.name}
                  </h3>
                </div>
                <nav className="space-y-2 overflow-y-auto custom-scrollbar">
                  {athleteNavItems.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => setIsMobileAthleteMenuOpen(false)}
                      className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-sm font-bold tracking-widest uppercase text-muted-foreground active:text-primary active:bg-primary/10"
                    >
                      <item.icon size={18} className="text-primary" />
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main
          className="flex-1 w-full p-4 md:p-8 animate-fade-in custom-scrollbar"
        >
          {children || <Outlet />}
          {/* Padding for bottom nav on mobile */}
          <div className="h-28 md:hidden" />
        </main>
      </div>

      {/* Mobile Bottom Navigation - Hidden during workout sessions */}
      {!location.pathname.startsWith('/athlete/workout') && (
        <MobileBottomNav items={navItems} isVisible={isNavVisible} role={role as any} />
      )}
    </div>
  );
}
