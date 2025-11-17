import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TranslationProvider, useTranslation } from './components/i18n/TranslationContext';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { DanceWorks } from './components/DanceWorks';
import { Certifications } from './components/Certifications';
import { Patron } from './components/Patron';

function AppContent() {
  const { isDetecting, t } = useTranslation();

  // Show a subtle loading state while detecting location
  if (isDetecting) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="space-y-4 text-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-muted-foreground font-light">{t('app.loading')}</p>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-background flex flex-col">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dance-works" element={<DanceWorks />} />
            <Route path="/works" element={<DanceWorks />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/patron" element={<Patron />} />
            {/* Catch-all route for unmatched paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default function App() {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
}