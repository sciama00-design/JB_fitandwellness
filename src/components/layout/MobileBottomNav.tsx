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
        if (role === 'athlete' && item.tabId) {
            const params = new URLSearchParams(location.search);
            const activeTab = params.get('tab') || 'home';
            return location.pathname === '/athlete' && activeTab === item.tabId;
        }
        return location.pathname === item.to || (item.to !== '/coach' && item.to !== '/athlete' && location.pathname.startsWith(item.to));
    };

    return (
        <motion.nav
            initial={{ y: 0 }}
            animate={{ y: isVisible ? 0 : 100 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-6 left-4 right-4 z-50 flex h-16 items-center justify-around rounded-2xl border border-border bg-card/60 px-2 backdrop-blur-2xl md:hidden shadow-2xl shadow-black/50"
        >
            {items.map((item) => {
                const active = isActiveItem(item);
                return (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        className="relative h-12 flex-1 flex flex-col items-center justify-center gap-1 rounded-full transition-all duration-500"
                    >
                        {active && (
                            <motion.div
                                layoutId="activePillMobile"
                                className="absolute inset-x-1 inset-y-1 rounded-xl bg-primary/20 border border-primary/30"
                                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                        <item.icon className={clsx("relative z-10 h-5 w-5 transition-colors duration-300", active ? "text-primary" : "text-muted-foreground")} />
                        <span className={clsx("relative z-10 text-[9px] font-black uppercase tracking-widest transition-colors duration-300", active ? "text-primary" : "text-muted-foreground")}>
                            {item.label}
                        </span>
                    </NavLink>
                );
            })}
        </motion.nav>
    );
}
