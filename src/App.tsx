import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from './lib/auth'
import LoginPage from './pages/LoginPage'
import Layout from './components/Layout'
import ExerciseLibrary from './pages/ExerciseLibrary'
import CoachDashboard from './pages/coach/CoachDashboard'
import PlanEditor from './pages/coach/PlanEditor'
import TemplateEditor from './pages/coach/TemplateEditor'
import AthleteDetail from './pages/coach/AthleteDetail'
import CoachAthletes from './pages/coach/CoachAthletes'
import CoachLibrary from './pages/coach/CoachLibrary'
import AthleteDashboard from './pages/athlete/AthleteDashboard'
import WorkoutSession from './pages/athlete/WorkoutSession'
import AIMealPlanner from './pages/athlete/AIMealPlanner'
import WeeklyPlanner from './pages/athlete/WeeklyPlanner'
import AthleteCalendar from './pages/athlete/AthleteCalendar'
import CoachDietGenerator from './pages/coach/CoachDietGenerator'
import CoachCalendar from './pages/coach/CoachCalendar'
import AiOptions from './pages/coach/AiOptions'
import { Loader2 } from 'lucide-react'
import { Toaster } from 'sonner'

const ProtectedRoute: React.FC<{ children: React.ReactNode; requiredRole?: 'coach' | 'athlete' }> = ({ children, requiredRole }) => {
  const { user, loading, role, signOut, initialized } = useAuth()

  if (!initialized || (user && loading && !role)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-emerald-500" />
          <p className="text-slate-400 animate-pulse">Inizializzazione sessione...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  if (user && !role && !loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 p-6 text-center space-y-6">
        <div className="w-20 h-20 bg-red-500/10 rounded-3xl flex items-center justify-center mb-4">
          <div className="w-12 h-12 rounded-2xl bg-red-500/20 flex items-center justify-center">
             <div className="w-6 h-6 rounded-full border-2 border-red-500 border-t-transparent animate-spin" />
          </div>
        </div>
        <h1 className="text-2xl font-bold text-white">Profilo non trovato</h1>
        <p className="text-slate-400 max-w-md">
          Il tuo account è stato autenticato ma non abbiamo trovato un profilo associato (Coach o Atleta). 
          Contatta l'amministratore o riprova a eseguire l'accesso.
        </p>
        <div className="flex flex-col gap-3 w-full max-w-xs">
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all"
          >
            Riprova Caricamento
          </button>
          <button 
            onClick={() => signOut()}
            className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl transition-all"
          >
            Scollegati
          </button>
        </div>
      </div>
    );
  }

  const userRole = role as string;

  if (requiredRole && userRole !== requiredRole) {
    const target = userRole === 'coach' ? '/coach' : '/athlete';
    return <Navigate to={target} replace />;
  }

  return <Layout>{children}</Layout>
}

import { AthleteNavigationProvider } from './context/AthleteNavigationContext'
import { AIModelProvider } from './context/AIModelContext'

function App() {
  const { user, role, initialized, loading } = useAuth()

  if (!initialized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-10 h-10 animate-spin text-emerald-500" />
          <p className="text-slate-400 animate-pulse">Caricamento applicazione...</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <Toaster 
        theme="dark" 
        position="top-right" 
        toastOptions={{
          style: {
            background: 'oklch(0.18 0.02 240 / 0.9)',
            border: '1px solid oklch(1 0 0 / 0.08)',
            color: 'oklch(0.98 0.01 240)',
            backdropFilter: 'blur(24px)',
            borderRadius: '1rem',
          },
        }}
        richColors
        closeButton
      />
      <AIModelProvider>
        <AthleteNavigationProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={!user ? <LoginPage /> : <Navigate to={role === 'coach' ? '/coach' : '/athlete'} replace />} />
            
            <Route path="/coach" element={
              <ProtectedRoute requiredRole="coach">
                <CoachDashboard />
              </ProtectedRoute>
            } />

            <Route path="/coach/plans/edit/:planId" element={
              <ProtectedRoute requiredRole="coach">
                <PlanEditor />
              </ProtectedRoute>
            } />

            <Route path="/coach/athletes" element={
              <ProtectedRoute requiredRole="coach">
                <CoachAthletes />
              </ProtectedRoute>
            } />

            <Route path="/coach/library" element={
              <ProtectedRoute requiredRole="coach">
                <CoachLibrary />
              </ProtectedRoute>
            } />

            <Route path="/coach/plans/new" element={
              <ProtectedRoute requiredRole="coach">
                <PlanEditor />
              </ProtectedRoute>
            } />

            <Route path="/coach/diet" element={
              <ProtectedRoute requiredRole="coach">
                <CoachDietGenerator />
              </ProtectedRoute>
            } />

            <Route path="/coach/calendar" element={
              <ProtectedRoute requiredRole="coach">
                <CoachCalendar />
              </ProtectedRoute>
            } />

            <Route path="/coach/ai-options" element={
              <ProtectedRoute requiredRole="coach">
                <AiOptions />
              </ProtectedRoute>
            } />


            <Route path="/coach/templates/new" element={
              <ProtectedRoute requiredRole="coach">
                <TemplateEditor />
              </ProtectedRoute>
            } />

            <Route path="/coach/templates/edit/:templateId" element={
              <ProtectedRoute requiredRole="coach">
                <TemplateEditor />
              </ProtectedRoute>
            } />
            
            <Route path="/coach/athletes/:id" element={
              <ProtectedRoute requiredRole="coach">
                <AthleteDetail />
              </ProtectedRoute>
            } />

            <Route path="/library" element={
              <ProtectedRoute requiredRole="coach">
                <ExerciseLibrary />
              </ProtectedRoute>
            } />

            <Route path="/athlete" element={
              <ProtectedRoute requiredRole="athlete">
                <AthleteDashboard />
              </ProtectedRoute>
            } />

            <Route path="/athlete/workout/:planId" element={
              <ProtectedRoute requiredRole="athlete">
                <WorkoutSession />
              </ProtectedRoute>
            } />

            <Route path="/athlete/nutrition" element={
              <ProtectedRoute requiredRole="athlete">
                <AIMealPlanner />
              </ProtectedRoute>
            } />

            <Route path="/athlete/planner" element={
              <ProtectedRoute requiredRole="athlete">
                <WeeklyPlanner />
              </ProtectedRoute>
            } />

            <Route path="/athlete/calendar" element={
              <ProtectedRoute requiredRole="athlete">
                <AthleteCalendar />
              </ProtectedRoute>
            } />


            <Route path="/" element={
              user ? (
                role ? (
                  <Navigate to={role === 'coach' ? '/coach' : '/athlete'} replace />
                ) : (
                  loading ? (
                    <div className="min-h-screen flex items-center justify-center bg-slate-950">
                      <Loader2 className="w-10 h-10 animate-spin text-emerald-500" />
                    </div>
                  ) : (
                    <ProtectedRoute><div /></ProtectedRoute>
                  )
                )
              ) : <Navigate to="/login" replace />
            } />
          </Routes>
        </BrowserRouter>
      </AthleteNavigationProvider>
    </AIModelProvider>
  </>
)
}

export default App

