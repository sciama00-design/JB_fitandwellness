import { NavLink, useLocation } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { 
    LogOut, 
    ChevronRight,
    PanelLeftClose
} from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

interface NavItem {
    to: string;
    icon: LucideIcon;
    label: string;
    tabId?: string;
}

interface DesktopSidebarProps {
    items: NavItem[];
    athleteNavItems?: NavItem[];
    profile: any;
    onLogout: () => void;
    role: 'athlete' | 'coach';
    athleteList?: any[] | null;
    expandedBranches: string[];
    toggleBranch: (id: string) => void;
    isSidebarOpen: boolean;
    setIsSidebarOpen: (open: boolean) => void;
    activeAthleteId?: string | null;
}

export function DesktopSidebar({ 
    items, 
    profile, 
    onLogout, 
    athleteList,
    athleteNavItems,
    expandedBranches,
    toggleBranch,
    isSidebarOpen,
    setIsSidebarOpen,
    activeAthleteId
}: DesktopSidebarProps) {
    const location = useLocation();

    const isActiveItem = (item: NavItem) => {
        return location.pathname + location.search === item.to;
    };

    if (!isSidebarOpen) return null;

    return (
        <motion.aside 
            initial={{ x: -300 }}
            animate={{ x: 0 }}
            exit={{ x: -300 }}
            className="hidden md:flex flex-col w-72 border-r border-white/5 bg-card/40 backdrop-blur-3xl h-screen fixed top-0 left-0 overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.3)] z-40"
        >
            <div className="p-8 flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-black tracking-tighter italic bg-gradient-to-r from-primary via-blue-400 to-accent bg-clip-text text-transparent leading-none">
                        JB<span className="text-foreground ml-0.5">FIT</span>
                    </h1>
                    <button 
                        onClick={() => setIsSidebarOpen(false)}
                        className="w-8 h-8 rounded-lg bg-white/5 hover:bg-primary/20 text-muted-foreground hover:text-primary transition-all flex items-center justify-center border border-white/5 hover:border-primary/20"
                        title="Nascondi sidebar"
                    >
                        <PanelLeftClose size={18} />
                    </button>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar px-5 pb-10 mt-2">
                <nav className="space-y-1">
                    {items.map((item) => {
                        const active = isActiveItem(item);
                        const isAtleti = item.label.toLowerCase() === 'atleti';
                        const isBranchOpen = expandedBranches.includes('atleti-root');

                        return (
                            <div key={item.to} className="space-y-1">
                                <NavLink
                                    to={item.to}
                                    onClick={(e) => {
                                        if (isAtleti) {
                                            e.preventDefault();
                                            toggleBranch('atleti-root');
                                        }
                                    }}
                                    className={clsx(
                                        'flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 group relative overflow-hidden font-bold text-[13px] tracking-tight',
                                        active && !isBranchOpen
                                            ? 'text-primary bg-primary/10 border border-primary/20 shadow-lg shadow-primary/5'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-muted/30 border border-transparent'
                                    )}
                                >
                                    <item.icon className={clsx("h-4.5 w-4.5 transition-transform duration-300", active ? "scale-110" : "group-hover:scale-110")} />
                                    <span>{item.label}</span>
                                    {isAtleti && (
                                        <ChevronRight size={14} className={clsx("ml-auto transition-transform", isBranchOpen && "rotate-90")} />
                                    )}
                                    {active && !isBranchOpen && (
                                        <motion.div 
                                            layoutId="indicator"
                                            className="absolute left-0 w-1 h-1/2 bg-primary rounded-r-full"
                                            transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </NavLink>

                                {/* Level 1: Athletes List */}
                                <AnimatePresence>
                                    {isAtleti && isBranchOpen && athleteList && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="pl-3 space-y-1 overflow-hidden"
                                        >
                                            {athleteList.map((athlete) => {
                                                const isAthleteBranchOpen = expandedBranches.includes(`athlete-${athlete.id}`);
                                                const isCurrentAthlete = activeAthleteId === athlete.id;

                                                return (
                                                    <div key={athlete.id} className="space-y-1">
                                                        <NavLink
                                                            to={`/coach/athletes/${athlete.id}?tab=anagrafica`}
                                                            onClick={() => {
                                                                if (!isAthleteBranchOpen) {
                                                                    toggleBranch(`athlete-${athlete.id}`);
                                                                }
                                                            }}
                                                            className={clsx(
                                                                "w-full flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-[11px] font-black uppercase tracking-wider transition-all text-left",
                                                                isCurrentAthlete 
                                                                    ? "text-primary/90 bg-primary/5" 
                                                                    : "text-muted-foreground/60 hover:text-foreground hover:bg-white/5"
                                                            )}
                                                        >
                                                            <div className={clsx(
                                                                "w-5 h-5 rounded-md flex items-center justify-center text-[9px]",
                                                                isCurrentAthlete ? "bg-primary text-white" : "bg-white/5"
                                                            )}>
                                                                {athlete.first_name?.[0]}{athlete.last_name?.[0]}
                                                            </div>
                                                            <span className="truncate">{athlete.first_name} {athlete.last_name}</span>
                                                            <ChevronRight size={12} className={clsx("ml-auto transition-transform opacity-40", isAthleteBranchOpen && "rotate-90")} />
                                                        </NavLink>

                                                        {/* Level 2: Athlete Tabs - Only show if branch is open */}
                                                        <AnimatePresence>
                                                            {isAthleteBranchOpen && (
                                                                <motion.div 
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: 'auto', opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    className="pl-7 space-y-0.5 overflow-hidden border-l border-white/5 ml-2.5"
                                                                >
                                                                    {(athleteNavItems && athleteNavItems.length > 0 ? athleteNavItems : []).map((tab) => {
                                                                        // Ensure we use the tab's own ID/URL if available, but athleteNavItems might be generic
                                                                        const tabUrl = `/coach/athletes/${athlete.id}?tab=${tab.tabId || 'anagrafica'}`;
                                                                        const isTabActive = activeAthleteId === athlete.id && 
                                                                                        (new URLSearchParams(location.search).get('tab') || 'anagrafica') === (tab.tabId || 'anagrafica');
                                                                        
                                                                        return (
                                                                            <NavLink
                                                                                key={tab.label}
                                                                                to={tabUrl}
                                                                                className={clsx(
                                                                                    "flex items-center gap-3 px-3 py-2 rounded-md text-[10px] font-bold uppercase tracking-widest transition-all",
                                                                                    isTabActive 
                                                                                        ? "text-primary bg-primary/5 shadow-[inset_0_0_10px_rgba(59,130,246,0.1)]" 
                                                                                        : "text-muted-foreground/40 hover:text-foreground hover:bg-white/5"
                                                                                )}
                                                                            >
                                                                                <tab.icon size={12} className={clsx("transition-transform", isTabActive && "scale-110")} />
                                                                                {tab.label}
                                                                            </NavLink>
                                                                        );
                                                                    })}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                );
                                            })}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </nav>
            </div>

            <div className="p-6 border-t border-border bg-background/20 backdrop-blur-md">
                <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-muted/20 border border-white/5">
                    <div className="h-9 w-9 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-black text-xs border border-primary/20">
                        {profile?.email?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-black truncate text-foreground leading-none">
                            {profile?.email?.split('@')[0]}
                        </p>
                        <p className="text-[8px] text-muted-foreground uppercase tracking-widest font-black mt-1">Coach Account</p>
                    </div>
                </div>

                <button
                    onClick={onLogout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-all font-bold text-xs"
                >
                    <LogOut className="h-4 w-4" />
                    <span>Esci Professionally</span>
                </button>
            </div>
        </motion.aside>
    );
}
