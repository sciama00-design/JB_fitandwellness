import { NavLink, useLocation } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import { LogOut, ChevronRight, PanelLeftClose, Sparkles } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Tooltip } from '../ui/Tooltip';
import { ModelSelector } from '../ai/ModelSelector';

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

    const isActiveItem = (item: NavItem) =>
        location.pathname + location.search === item.to;

    if (!isSidebarOpen) return null;

    return (
        <motion.aside
            initial={{ x: -288, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -288, opacity: 0 }}
            transition={{ type: 'spring', damping: 32, stiffness: 300 }}
            className="hidden md:flex flex-col w-72 h-screen fixed top-0 left-0 z-40 overflow-hidden
                       border-r border-border/60
                       bg-[oklch(0.12_0.012_250/0.92)] backdrop-blur-2xl
                       shadow-[4px_0_40px_oklch(0,0,0,0.4)]"
        >
            {/* ── Brand Header ── */}
            <div className="px-6 pt-6 pb-5 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-md shadow-primary/30">
                        <Sparkles className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-xl font-black tracking-tight text-foreground select-none">
                        JB<span className="text-primary">FIT</span>
                    </span>
                </div>
                <Tooltip content="Chiudi sidebar" side="right">
                    <button
                        onClick={() => setIsSidebarOpen(false)}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground
                                   hover:bg-secondary hover:text-foreground transition-all duration-200"
                    >
                        <PanelLeftClose size={15} />
                    </button>
                </Tooltip>
            </div>

            {/* ── Divider ── */}
            <div className="mx-5 h-px bg-border/50 shrink-0" />

            {/* ── Navigation ── */}
            <nav className="flex-1 overflow-y-auto custom-scrollbar px-3 py-4 space-y-0.5">
                {items.map((item) => {
                    const active = isActiveItem(item);
                    const isAtleti = item.label.toLowerCase() === 'atleti';
                    const isBranchOpen = expandedBranches.includes('atleti-root');

                    return (
                        <div key={item.to}>
                            <NavLink
                                to={item.to}
                                className={clsx(
                                    'relative flex items-center gap-3 px-3 py-2.5 rounded-xl text-[13px] font-semibold transition-all duration-200 group',
                                    active && !isBranchOpen
                                        ? 'bg-primary/10 text-primary border border-primary/20'
                                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/70 border border-transparent'
                                )}
                            >
                                {/* Active left bar */}
                                {active && !isBranchOpen && (
                                    <motion.div
                                        layoutId="sidebar-indicator"
                                        className="absolute left-0 top-2 bottom-2 w-[3px] bg-primary rounded-r-full"
                                        transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                                    />
                                )}

                                <div className={clsx(
                                    'w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 shrink-0',
                                    active && !isBranchOpen
                                        ? 'bg-primary/15 text-primary'
                                        : 'bg-secondary/60 text-muted-foreground group-hover:text-foreground group-hover:bg-secondary'
                                )}>
                                    <item.icon className="h-4 w-4" />
                                </div>

                                <span className="flex-1 truncate">{item.label}</span>

                                {isAtleti && (
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            toggleBranch('atleti-root');
                                        }}
                                        className="p-1 rounded-md hover:bg-white/10 transition-colors"
                                    >
                                        <ChevronRight
                                            size={13}
                                            className={clsx(
                                                'transition-transform duration-300 text-muted-foreground/50',
                                                isBranchOpen && 'rotate-90 text-primary/70'
                                            )}
                                        />
                                    </button>
                                )}
                            </NavLink>

                            {/* Level 1: Athlete list */}
                            <AnimatePresence>
                                {isAtleti && isBranchOpen && athleteList && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                                        className="overflow-hidden pl-3 pt-1 space-y-0.5"
                                    >
                                        {athleteList.map((athlete) => {
                                            const isBranch = expandedBranches.includes(`athlete-${athlete.id}`);
                                            const isCurrent = activeAthleteId === athlete.id;

                                            return (
                                                <div key={athlete.id}>
                                                    <NavLink
                                                        to={`/coach/athletes/${athlete.id}?tab=anagrafica`}
                                                        onClick={() => {
                                                            if (!isBranch) toggleBranch(`athlete-${athlete.id}`);
                                                        }}
                                                        className={clsx(
                                                            'flex items-center gap-2.5 px-3 py-2 rounded-lg text-[12px] font-semibold transition-all duration-200 group/ath',
                                                            isCurrent
                                                                ? 'text-primary bg-primary/8'
                                                                : 'text-muted-foreground/60 hover:text-foreground hover:bg-secondary/50'
                                                        )}
                                                    >
                                                        <div className={clsx(
                                                            'w-6 h-6 rounded-md flex items-center justify-center text-[9px] font-black shrink-0 transition-all',
                                                            isCurrent
                                                                ? 'bg-primary text-primary-foreground shadow-sm shadow-primary/30'
                                                                : 'bg-secondary text-muted-foreground group-hover/ath:bg-secondary/80'
                                                        )}>
                                                            {athlete.first_name?.[0]}{athlete.last_name?.[0]}
                                                        </div>
                                                        <span className="truncate flex-1">{athlete.first_name} {athlete.last_name}</span>
                                                        <ChevronRight size={11} className={clsx(
                                                            'opacity-30 transition-transform shrink-0',
                                                            isBranch && 'rotate-90 opacity-60'
                                                        )} />
                                                    </NavLink>

                                                    {/* Level 2: Athlete tabs */}
                                                    <AnimatePresence>
                                                        {isBranch && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.22, ease: [0.4, 0, 0.2, 1] }}
                                                                className="overflow-hidden pl-4 pt-0.5 pb-1 space-y-px border-l border-border/50 ml-3"
                                                            >
                                                                {(athleteNavItems ?? []).map((tab) => {
                                                                    const tabUrl = `/coach/athletes/${athlete.id}?tab=${tab.tabId ?? 'anagrafica'}`;
                                                                    const activeParam = new URLSearchParams(location.search).get('tab') ?? 'anagrafica';
                                                                    const isTab = activeAthleteId === athlete.id && activeParam === (tab.tabId ?? 'anagrafica');

                                                                    return (
                                                                        <NavLink
                                                                            key={tab.label}
                                                                            to={tabUrl}
                                                                            className={clsx(
                                                                                'flex items-center gap-2 px-2.5 py-1.5 rounded-md text-[11px] font-semibold uppercase tracking-wider transition-all duration-200',
                                                                                isTab
                                                                                    ? 'text-primary bg-primary/8 border-l-2 border-primary -ml-px'
                                                                                    : 'text-muted-foreground/40 hover:text-foreground/70 hover:bg-secondary/40'
                                                                            )}
                                                                        >
                                                                            <tab.icon size={11} className={clsx(isTab && 'text-primary')} />
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

            {/* ── AI Engine ── */}
            <div className="px-5 pb-4 shrink-0">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40 mb-2 px-1">AI Engine</p>
                <ModelSelector variant="minimal" className="w-full" />
            </div>

            {/* ── Divider ── */}
            <div className="mx-5 h-px bg-border/50 shrink-0" />

            {/* ── Profile ── */}
            <div className="p-4 shrink-0">
                <div className="flex items-center gap-3 mb-3 px-1">
                    <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-black text-[11px] shrink-0">
                        {profile?.email?.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-bold truncate text-foreground leading-none">
                            {profile?.email?.split('@')[0]}
                        </p>
                        <p className="text-[10px] text-muted-foreground/50 uppercase tracking-[0.15em] mt-0.5">Coach</p>
                    </div>
                </div>
                <button
                    onClick={onLogout}
                    className="w-full flex items-center justify-center gap-2 px-3 py-2 text-muted-foreground/60
                               hover:text-destructive hover:bg-destructive/8 rounded-lg
                               transition-all duration-200 text-[12px] font-semibold"
                >
                    <LogOut className="h-3.5 w-3.5" />
                    Disconnetti
                </button>
            </div>
        </motion.aside>
    );
}
