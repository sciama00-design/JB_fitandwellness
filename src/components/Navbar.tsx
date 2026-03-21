import { NavLink, useLocation } from 'react-router-dom';
import { useAuth } from '../lib/auth';
import { LogOut, Home, User, Users, BookOpen, Dumbbell, Calculator, Calendar as CalendarIcon } from 'lucide-react';

export default function Navbar() {
  const { signOut, user, role } = useAuth();
  const location = useLocation();

  const isAthleteTabActive = (tab: string) => {
    if (role !== 'athlete') return false;
    const params = new URLSearchParams(location.search);
    const activeTab = params.get('tab') || 'home';
    return location.pathname === '/athlete' && activeTab === tab;
  };

  type NavItem = {
    to: string;
    icon: React.ElementType;
    label: string;
    tabId?: string;
  };

  const navItemsCoach: NavItem[] = [
    { to: '/coach', icon: Home, label: 'Home' },
    { to: '/coach/athletes', icon: Users, label: 'Atleti' },
    { to: '/coach/calendar', icon: CalendarIcon, label: 'Calendario' },
    { to: '/coach/diet', icon: Calculator, label: 'Dieta' },
    { to: '/coach/library', icon: BookOpen, label: 'Libreria' },
  ];

  const navItemsAthlete: NavItem[] = [
    { to: '/athlete?tab=home', icon: Home, label: 'Home', tabId: 'home' },
    { to: '/athlete?tab=train', icon: Dumbbell, label: 'Allenati', tabId: 'train' },
    { to: '/athlete?tab=calendar', icon: CalendarIcon, label: 'Calendario', tabId: 'calendar' },
  ];

  const navItems: NavItem[] = role === 'coach' ? navItemsCoach : navItemsAthlete;

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 glass rounded-2xl border border-white/5 shadow-2xl backdrop-blur-xl pointer-events-auto">
          <div className="flex items-center space-x-6">
            <NavLink to="/" className="text-2xl font-black bg-gradient-to-r from-primary-400 to-indigo-400 bg-clip-text text-transparent italic tracking-tighter hover:scale-105 transition-transform">
              JB FIT
            </NavLink>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, idx) => {
                const isActive = item.tabId 
                  ? isAthleteTabActive(item.tabId)
                  : location.pathname === item.to || (item.to !== '/coach' && location.pathname.startsWith(item.to));

                return (
                  <NavLink 
                    key={idx}
                    to={item.to} 
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl transition-all font-bold text-sm ${isActive ? 'bg-primary-500/20 text-primary-300 shadow-lg shadow-primary-500/10' : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'}`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3 text-sm mr-2">
              <div className="w-9 h-9 rounded-xl bg-slate-800/80 border border-white/5 flex items-center justify-center text-primary-400 shadow-inner">
                <User className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-300 tracking-wide">{user?.email?.split('@')[0]}</span>
            </div>
            
            <button 
              onClick={() => signOut()}
              className="p-2.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all border border-transparent hover:border-red-500/20"
              title="Scollegati"
            >
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 pointer-events-none pb-safe">
        <div className="flex items-center justify-around px-2 py-3 glass rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl pointer-events-auto shadow-black/80">
          {navItems.map((item, idx) => {
            const isActive = item.tabId 
              ? isAthleteTabActive(item.tabId)
              : location.pathname === item.to || (item.to !== '/coach' && location.pathname.startsWith(item.to));

            return (
              <NavLink 
                key={idx}
                to={item.to} 
                className={`flex flex-col items-center justify-center space-y-1 w-16 h-14 rounded-2xl transition-all duration-300 ${isActive ? 'text-primary-300 bg-primary-500/20 shadow-inner scale-105' : 'text-slate-400 hover:text-slate-300 active:scale-95'}`}
              >
                <item.icon className={`w-5 h-5 ${isActive ? 'animate-bounce-slight' : ''}`} />
                <span className="text-[10px] font-bold tracking-wide mt-1">{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </div>
    </>
  );
}
