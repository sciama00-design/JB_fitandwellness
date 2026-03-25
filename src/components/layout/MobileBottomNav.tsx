import { NavLink, useLocation } from 'react-router-dom';
import type { LucideIcon } from 'lucide-react';
import clsx from 'clsx';
import { motion } from 'framer-motion';

interface NavItem {
    to: string;
    icon: LucideIcon;
    label: string;
    tabId?: string;
}

interface MobileBottomNavProps {
    items: NavItem[];
    isVisible: boolean;
    role: 'athlete' | 'coach';
}

export function MobileBottomNav({ items, isVisible, role }: MobileBottomNavProps) {
    const location = useLocation();

    const isActiveItem = (item: NavItem) => {
        if (role === 'athlete') {
            if (item.tabId === 'calendar') {
                return location.pathname === '/athlete/calendar';
            }
            if (item.tabId) {
                const params = new URLSearchParams(location.search);
                const activeTab = params.get('tab') || 'home';
                return location.pathname === '/athlete' && activeTab === item.tabId;
            }
        }
        return location.pathname === item.to || (item.to !== '/coach' && item.to !== '/athlete' && location.pathname.startsWith(item.to));
    };

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : 100 }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed bottom-5 left-3 right-3 z-50 flex h-[68px] items-center justify-around rounded-[1.25rem] border border-white/[0.06] bg-card/70 px-1.5 backdrop-blur-2xl backdrop-saturate-150 md:hidden shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
        >
            {items.map((item) => {
                const active = isActiveItem(item);
                return (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className="relative h-13 flex-1 flex flex-col items-center justify-center gap-0.5 rounded-2xl transition-all duration-300"
                    >
                        {active && (
                            <motion.div
                                layoutId="activePillMobile"
                                className="absolute inset-x-1.5 inset-y-1 rounded-xl bg-primary/[0.12] border border-primary/20"
                                transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                            />
                        )}

                        {/* Active dot above icon */}
                        <motion.div
                            animate={{ 
                                scale: active ? 1 : 0,
                                opacity: active ? 1 : 0,
                            }}
                            transition={{ type: 'spring', bounce: 0.4, duration: 0.4 }}
                            className="w-1 h-1 rounded-full bg-primary shadow-sm shadow-primary/40 mb-0.5"
                        />

                        <item.icon className={clsx(
                            "relative z-10 h-[18px] w-[18px] transition-all duration-300",
                            active ? "text-primary scale-110" : "text-muted-foreground/60"
                        )} />
                        <span className={clsx(
                            "relative z-10 text-[8px] font-bold uppercase tracking-[0.15em] transition-all duration-300",
                            active ? "text-primary" : "text-muted-foreground/40"
                        )}>
                            {item.label}
                        </span>
                    </NavLink>
                );
            })}
        </motion.nav>
    );
}
