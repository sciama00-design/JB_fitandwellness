import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { LucideIcon } from 'lucide-react';

interface TabItem {
  id: string;
  label: string;
  icon?: LucideIcon;
}

interface AppTabsProps {
  tabs: TabItem[];
  value: string;
  onValueChange: (value: string) => void;
  children: React.ReactNode;
  /** Allow horizontal scrolling on mobile */
  scrollable?: boolean;
  /** Hide the tab trigger list on mobile (hidden md:flex) */
  hideListOnMobile?: boolean;
}

/**
 * Accessible Tabs built on Radix with animated sliding indicator.
 * Supports horizontal scroll on mobile and keyboard navigation.
 */
export function AppTabs({ 
  tabs, 
  value, 
  onValueChange, 
  children, 
  scrollable = true,
  hideListOnMobile = false
}: AppTabsProps) {
  return (
    <RadixTabs.Root value={value} onValueChange={onValueChange}>
      <RadixTabs.List
        className={clsx(
          'relative items-center gap-1 p-1.5 bg-white/[0.03] border border-white/5 rounded-2xl',
          hideListOnMobile ? 'hidden md:flex' : 'flex',
          scrollable && 'overflow-x-auto no-scrollbar snap-x snap-mandatory'
        )}
      >
        {tabs.map((tab) => {
          const isActive = value === tab.id;
          return (
            <RadixTabs.Trigger
              key={tab.id}
              value={tab.id}
              className={clsx(
                'relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-widest transition-colors duration-200 whitespace-nowrap snap-start cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-primary/40',
                isActive 
                  ? 'text-primary'
                  : 'text-muted-foreground/60 hover:text-foreground'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="tab-indicator"
                  className="absolute inset-0 bg-primary/10 border border-primary/20 rounded-xl shadow-lg shadow-primary/5"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {tab.icon && <tab.icon className={clsx('w-3.5 h-3.5', isActive && 'scale-110')} />}
                {tab.label}
              </span>
            </RadixTabs.Trigger>
          );
        })}
      </RadixTabs.List>

      {children}
    </RadixTabs.Root>
  );
}

/** Tab content panel. Use inside AppTabs. */
export function AppTabContent({ value, children }: { value: string; children: React.ReactNode }) {
  return (
    <RadixTabs.Content value={value} className="outline-none mt-8">
      {children}
    </RadixTabs.Content>
  );
}
