import React, { useState, useEffect } from 'react';
import { useAuth } from '../lib/auth';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabase';
import { 
  Home, 
  Users, 
  Calendar as CalendarIcon, 
  BookOpen, 
  Dumbbell, 
  Menu,
  PanelLeftOpen,
  Sparkles
} from 'lucide-react';
import { MobileBottomNav } from './layout/MobileBottomNav';
import { DesktopSidebar } from './layout/DesktopSidebar';
import { useAthleteNavigation } from '../context/AthleteNavigationContext';
import { ATHLETE_TABS } from '../pages/coach/AthleteDetail';
import { Drawer as VaulDrawer } from 'vaul';
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
    toggleBranch,
    isNavVisible,
    setIsNavVisible
  } = useAthleteNavigation();
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
  }, [lastScrollY, setIsNavVisible]);

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
    { to: '/coach/library', icon: BookOpen, label: 'Libreria' },
    { to: '/coach/ai-options', icon: Sparkles, label: 'Ai Options' },
  ];

  const navItemsAthlete = [
    { to: '/athlete?tab=home', icon: Home, label: 'Home', tabId: 'home' },
    { to: '/athlete?tab=train', icon: Dumbbell, label: 'Allenati', tabId: 'train' },
    { to: '/athlete/calendar', icon: CalendarIcon, label: 'Calendario', tabId: 'calendar' },
  ];

  const navItems = role === 'coach' ? navItemsCoach : navItemsAthlete;

  const athleteNavItems = activeAthlete ? ATHLETE_TABS.map(tab => ({
    to: `/coach/athletes/${activeAthlete.id}?tab=${tab.id}`,
    icon: tab.icon,
    label: tab.label,
    tabId: tab.id
  })) : [];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 overflow-x-clip">
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

        {/* Mobile Athlete Menu — Vaul Drawer Bottom Sheet */}
        {activeAthlete && (
          <>
            <AnimatePresence>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={() => setIsMobileAthleteMenuOpen(true)}
                className="md:hidden fixed top-4 right-4 z-40 w-10 h-10 rounded-xl bg-primary/[0.08] backdrop-blur-xl border border-primary/15 shadow-xl flex items-center justify-center text-primary"
              >
                <Menu size={20} />
              </motion.button>
            </AnimatePresence>

            <VaulDrawer.Root open={isMobileAthleteMenuOpen} onOpenChange={setIsMobileAthleteMenuOpen}>
              <VaulDrawer.Portal>
                <VaulDrawer.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] md:hidden" />
                <VaulDrawer.Content className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex flex-col rounded-t-[1.75rem] bg-card/95 backdrop-blur-2xl border-t border-white/[0.08] shadow-2xl max-h-[85vh]">
                  {/* Handle */}
                  <div className="mx-auto mt-3 mb-1 h-1.5 w-12 rounded-full bg-white/10 shrink-0" />
                  
                  <div className="px-6 pt-4 pb-3 border-b border-white/5">
                    <VaulDrawer.Title className="text-[10px] uppercase font-bold text-primary/50 tracking-[0.3em] mb-1">Navigazione Atleta</VaulDrawer.Title>
                    <p className="text-xl font-black text-foreground italic uppercase tracking-tighter">
                      {activeAthlete.name}
                    </p>
                  </div>

                  <nav className="p-4 space-y-1.5 overflow-y-auto custom-scrollbar pb-safe">
                    {athleteNavItems.map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        onClick={() => setIsMobileAthleteMenuOpen(false)}
                        className="flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.04] text-sm font-semibold tracking-widest uppercase text-muted-foreground active:text-primary active:bg-primary/[0.08] transition-colors"
                      >
                        <div className="w-8 h-8 rounded-lg bg-primary/[0.08] flex items-center justify-center">
                          <item.icon size={16} className="text-primary" />
                        </div>
                        {item.label}
                      </Link>
                    ))}
                  </nav>
                </VaulDrawer.Content>
              </VaulDrawer.Portal>
            </VaulDrawer.Root>
          </>
        )}

        {/* Main Content */}
        <main
          className="flex-1 w-full p-4 md:p-8 animate-fade-in custom-scrollbar"
        >
          {children || <Outlet />}
          {/* Padding for bottom nav on mobile */}
          <div className="h-28 md:hidden" />
        </main>
      </div>

      {/* Mobile Bottom Navigation - Hidden during workout sessions and editor */}
      {!location.pathname.startsWith('/athlete/workout') && 
       !location.pathname.startsWith('/coach/plans') && 
       !location.pathname.startsWith('/coach/templates') && (
        <MobileBottomNav items={navItems} isVisible={isNavVisible} role={role as any} />
      )}
    </div>
  );
}
