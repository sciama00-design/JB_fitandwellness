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
            if (item.tabId === 'calendar') return location.pathname === '/athlete/calendar';
            if (item.tabId) {
                const tab = new URLSearchParams(location.search).get('tab') || 'home';
                return location.pathname === '/athlete' && tab === item.tabId;
            }
        }
        return (
            location.pathname === item.to ||
            (item.to !== '/coach' && item.to !== '/athlete' && location.pathname.startsWith(item.to))
        );
    };

    return (
        <motion.nav
            initial={false}
            animate={{ y: isVisible ? 0 : 96 }}
            transition={{ type: 'spring', damping: 30, stiffness: 260 }}
            className="fixed bottom-4 left-3 right-3 z-50 md:hidden
                       flex items-center justify-around
                       h-[60px] rounded-2xl
                       bg-[oklch(0.14_0.014_250/0.88)] backdrop-blur-xl
                       border border-border/70
                       shadow-[0_8px_32px_oklch(0,0,0,0.45)]
                       pb-safe"
        >
            {items.map((item) => {
                const active = isActiveItem(item);
                return (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className="relative flex-1 flex flex-col items-center justify-center gap-0.5 h-full min-h-[44px]"
                    >
                        {/* Active pill background */}
                        {active && (
                            <motion.div
                                layoutId="mobile-active-pill"
                                className="absolute inset-x-2 inset-y-1.5 rounded-xl bg-primary/12 border border-primary/20"
                                transition={{ type: 'spring', bounce: 0.18, duration: 0.45 }}
                            />
                        )}

                        <item.icon className={clsx(
                            'relative z-10 h-[19px] w-[19px] transition-all duration-200',
                            active ? 'text-primary' : 'text-muted-foreground/55'
                        )} />

                        <span className={clsx(
                            'relative z-10 text-[9px] font-bold uppercase tracking-[0.12em] transition-all duration-200',
                            active ? 'text-primary' : 'text-muted-foreground/40'
                        )}>
                            {item.label}
                        </span>
                    </NavLink>
                );
            })}
        </motion.nav>
    );
}
