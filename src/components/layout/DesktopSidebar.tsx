import { NavLink, useLocation } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { 
    LogOut, 
    ChevronRight,
    PanelLeftClose,
    Sparkles
} from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from '../ui/Tooltip';

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
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: 'spring', damping: 30, stiffness: 280 }}
            className="hidden md:flex flex-col w-72 border-r border-white/[0.06] bg-card/30 backdrop-blur-3xl h-screen fixed top-0 left-0 overflow-hidden shadow-[20px_0_60px_rgba(0,0,0,0.4)] z-40"
        >
            {/* Brand Header */}
            <div className="px-7 pt-7 pb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                        <Sparkles className="w-4.5 h-4.5 text-white" />
                    </div>
                    <h1 className="text-2xl font-black tracking-tighter italic bg-gradient-to-r from-white via-primary/80 to-accent/60 bg-clip-text text-transparent leading-none select-none">
                        JB<span className="text-foreground/90 ml-px">FIT</span>
                    </h1>
                </div>
                <Tooltip content="Chiudi sidebar" side="right">
                    <button 
                        onClick={() => setIsSidebarOpen(false)}
                        className="w-8 h-8 rounded-lg bg-white/[0.04] hover:bg-primary/15 text-muted-foreground/60 hover:text-primary transition-all flex items-center justify-center border border-white/[0.04] hover:border-primary/20"
                    >
                        <PanelLeftClose size={16} />
                    </button>
                </Tooltip>
            </div>

            {/* Separator */}
            <div className="mx-6 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto custom-scrollbar px-4 pb-10 mt-4">
                <nav className="space-y-1">
                    {items.map((item) => {
                        const active = isActiveItem(item);
                        const isAtleti = item.label.toLowerCase() === 'atleti';
                        const isBranchOpen = expandedBranches.includes('atleti-root');

                        return (
                            <div key={item.to} className="space-y-0.5">
                                <NavLink
                                    to={item.to}
                                    className={clsx(
                                        'flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden font-semibold text-[13px] tracking-tight',
                                        active && !isBranchOpen
                                            ? 'text-primary bg-primary/[0.08] border border-primary/15 shadow-lg shadow-primary/[0.04]'
                                            : 'text-muted-foreground hover:text-foreground hover:bg-white/[0.04] border border-transparent'
                                    )}
                                >
                                    {/* Active indicator pill */}
                                    {active && !isBranchOpen && (
                                        <motion.div 
                                            layoutId="sidebar-indicator"
                                            className="absolute left-0 w-[3px] top-2 bottom-2 bg-primary rounded-r-full"
                                            transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                                        />
                                    )}
                                    <div className={clsx(
                                        "w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300",
                                        active && !isBranchOpen
                                            ? "bg-primary/15 text-primary"
                                            : "bg-white/[0.03] text-muted-foreground group-hover:text-foreground group-hover:bg-white/[0.06]"
                                    )}>
                                        <item.icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                    <span>{item.label}</span>
                                    {isAtleti && (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                toggleBranch('atleti-root');
                                            }}
                                            className="ml-auto p-1.5 rounded-md hover:bg-white/[0.08] transition-colors"
                                        >
                                            <ChevronRight 
                                                size={14} 
                                                className={clsx(
                                                    "transition-transform duration-300 text-muted-foreground/40",
                                                    isBranchOpen && "rotate-90 text-primary/60"
                                                )} 
                                            />
                                        </button>
                                    )}
                                </NavLink>

                                {/* Level 1: Athletes List */}
                                <AnimatePresence>
                                    {isAtleti && isBranchOpen && athleteList && (
                                        <motion.div 
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                                            className="pl-3 space-y-0.5 overflow-hidden"
                                        >
                                            {athleteList.map((athlete) => {
                                                const isAthleteBranchOpen = expandedBranches.includes(`athlete-${athlete.id}`);
                                                const isCurrentAthlete = activeAthleteId === athlete.id;

                                                return (
                                                    <div key={athlete.id} className="space-y-0.5">
                                                        <NavLink
                                                            to={`/coach/athletes/${athlete.id}?tab=anagrafica`}
                                                            onClick={() => {
                                                                if (!isAthleteBranchOpen) {
                                                                    toggleBranch(`athlete-${athlete.id}`);
                                                                }
                                                            }}
                                                            className={clsx(
                                                                "w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-[11px] font-bold uppercase tracking-wider transition-all text-left group/athlete",
                                                                isCurrentAthlete 
                                                                    ? "text-primary/90 bg-primary/[0.06]" 
                                                                    : "text-muted-foreground/50 hover:text-foreground hover:bg-white/[0.04]"
                                                            )}
                                                        >
                                                            <div className={clsx(
                                                                "w-6 h-6 rounded-md flex items-center justify-center text-[8px] font-black transition-all shrink-0",
                                                                isCurrentAthlete 
                                                                    ? "bg-gradient-to-br from-primary to-accent text-white shadow-sm shadow-primary/20" 
                                                                    : "bg-white/[0.05] group-hover/athlete:bg-white/[0.08]"
                                                            )}>
                                                                {athlete.first_name?.[0]}{athlete.last_name?.[0]}
                                                            </div>
                                                            <span className="truncate">{athlete.first_name} {athlete.last_name}</span>
                                                            <ChevronRight 
                                                                size={10} 
                                                                className={clsx(
                                                                    "ml-auto transition-transform opacity-30 shrink-0",
                                                                    isAthleteBranchOpen && "rotate-90 opacity-60"
                                                                )} 
                                                            />
                                                        </NavLink>

                                                        {/* Level 2: Athlete Tabs */}
                                                        <AnimatePresence>
                                                            {isAthleteBranchOpen && (
                                                                <motion.div 
                                                                    initial={{ height: 0, opacity: 0 }}
                                                                    animate={{ height: 'auto', opacity: 1 }}
                                                                    exit={{ height: 0, opacity: 0 }}
                                                                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                                                    className="pl-5 space-y-px overflow-hidden border-l border-white/[0.04] ml-3"
                                                                >
                                                                    {(athleteNavItems && athleteNavItems.length > 0 ? athleteNavItems : []).map((tab) => {
                                                                        const tabUrl = `/coach/athletes/${athlete.id}?tab=${tab.tabId || 'anagrafica'}`;
                                                                        const isTabActive = activeAthleteId === athlete.id && 
                                                                                        (new URLSearchParams(location.search).get('tab') || 'anagrafica') === (tab.tabId || 'anagrafica');
                                                                        
                                                                        return (
                                                                            <NavLink
                                                                                key={tab.label}
                                                                                to={tabUrl}
                                                                                className={clsx(
                                                                                    "flex items-center gap-2.5 px-3 py-2 rounded-md text-[10px] font-semibold uppercase tracking-widest transition-all",
                                                                                    isTabActive 
                                                                                        ? "text-primary bg-primary/[0.06] border-l-2 border-primary -ml-px" 
                                                                                        : "text-muted-foreground/35 hover:text-foreground/70 hover:bg-white/[0.03]"
                                                                                )}
                                                                            >
                                                                                <tab.icon size={11} className={clsx("transition-all", isTabActive && "text-primary")} />
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

            {/* Profile Section */}
            <div className="p-5 border-t border-white/[0.04] bg-background/10">
                <div className="flex items-center gap-3 mb-4 p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-primary/80 to-accent/60 flex items-center justify-center text-white font-black text-[11px] shadow-lg shadow-primary/10 shrink-0">
                        {profile?.email?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-xs font-bold truncate text-foreground/90 leading-none">
                            {profile?.email?.split('@')[0]}
                        </p>
                        <p className="text-[8px] text-muted-foreground/50 uppercase tracking-[0.2em] font-bold mt-1">Coach</p>
                    </div>
                </div>

                <button
                    onClick={onLogout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-muted-foreground/50 hover:text-destructive hover:bg-destructive/[0.06] rounded-lg transition-all font-semibold text-[11px] tracking-wide"
                >
                    <LogOut className="h-3.5 w-3.5" />
                    <span>Disconnetti</span>
                </button>
            </div>
        </motion.aside>
    );
}
