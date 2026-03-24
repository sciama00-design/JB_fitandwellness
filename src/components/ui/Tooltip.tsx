import React from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  side?: 'top' | 'right' | 'bottom' | 'left';
  delay?: number;
}

/**
 * Accessible Tooltip with glass styling.
 * Wraps Radix Tooltip with Midnight & Aurora aesthetic.
 */
export function Tooltip({ children, content, side = 'top', delay = 200 }: TooltipProps) {
  return (
    <RadixTooltip.Provider delayDuration={delay}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>
          {children}
        </RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            sideOffset={6}
            className="z-[200] px-3 py-1.5 bg-card/90 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl text-[10px] font-bold text-foreground uppercase tracking-widest animate-fade-in select-none"
          >
            {content}
            <RadixTooltip.Arrow className="fill-card/90" />
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
}
