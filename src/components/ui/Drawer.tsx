import React from 'react';
import { Drawer as VaulDrawer } from 'vaul';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

interface ResponsiveDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
  /** Side panel from right on desktop (default: false = centered dialog) */
  side?: boolean;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isMobile;
}

/**
 * Responsive Drawer: bottom-sheet on mobile (Vaul), Dialog or side-panel on desktop (Radix).
 */
export function ResponsiveDrawer({ open, onOpenChange, title, children, side = false }: ResponsiveDrawerProps) {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <VaulDrawer.Root open={open} onOpenChange={onOpenChange}>
        <VaulDrawer.Portal>
          <VaulDrawer.Overlay className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm" />
          <VaulDrawer.Content className="fixed bottom-0 left-0 right-0 z-[101] mt-24 flex flex-col rounded-t-[2rem] bg-card/95 backdrop-blur-2xl border-t border-white/10 shadow-2xl max-h-[92vh]">
            {/* Handle */}
            <div className="mx-auto mt-3 mb-1 h-1.5 w-12 rounded-full bg-white/10 shrink-0" />

            {title && (
              <div className="flex items-center justify-between px-6 pt-3 pb-4 border-b border-white/5">
                <VaulDrawer.Title className="text-xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent italic tracking-tight">
                  {title}
                </VaulDrawer.Title>
                <VaulDrawer.Close className="p-2 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-xl transition-all active:scale-90">
                  <X className="w-5 h-5" />
                </VaulDrawer.Close>
              </div>
            )}

            <div className="overflow-y-auto flex-1 px-5 py-4 pb-safe custom-scrollbar">
              {children}
            </div>
          </VaulDrawer.Content>
        </VaulDrawer.Portal>
      </VaulDrawer.Root>
    );
  }

  // Desktop: Radix Dialog (centered or side panel)
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] bg-background/60 backdrop-blur-md"
              />
            </Dialog.Overlay>

            <Dialog.Content asChild>
              <motion.div
                initial={side ? { x: '100%' } : { opacity: 0, y: 40, scale: 0.96 }}
                animate={side ? { x: 0 } : { opacity: 1, y: 0, scale: 1 }}
                exit={side ? { x: '100%' } : { opacity: 0, y: 40, scale: 0.96 }}
                transition={{ type: 'spring', damping: 28, stiffness: 320 }}
                className={
                  side
                    ? 'fixed right-0 top-0 bottom-0 z-[101] w-full max-w-xl bg-card/95 backdrop-blur-2xl border-l border-white/10 shadow-2xl flex flex-col overflow-hidden'
                    : 'fixed left-1/2 top-1/2 z-[101] -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl bg-card/95 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-[2rem] flex flex-col max-h-[85vh] overflow-hidden'
                }
              >
                {title && (
                  <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/5 shrink-0">
                    <Dialog.Title className="text-2xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent italic tracking-tight">
                      {title}
                    </Dialog.Title>
                    <Dialog.Close className="p-3 text-muted-foreground hover:text-foreground hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/5 active:scale-90">
                      <X className="w-6 h-6" />
                    </Dialog.Close>
                  </div>
                )}

                <div className="overflow-y-auto flex-1 p-5 sm:p-8 custom-scrollbar">
                  {children}
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
