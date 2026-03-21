import React from 'react';
import Navbar from './Navbar';
import { useAuth } from '../lib/auth';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020617]">
        <div className="w-12 h-12 border-4 border-primary-500/20 border-t-primary-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-1 w-full pt-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-28 md:pb-12 animate-fade-in relative z-10">
        {children}
      </main>
    </div>
  );
}
