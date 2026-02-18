import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { MagicalNavigation } from './components/MagicalNavigation';
import { MagicalCursor } from './components/MagicalCursor';
import { ParticleEffect } from './components/ParticleEffect';
import { LoadingScreen } from './components/LoadingScreen';
import { ScrollToTop } from './components/ScrollToTop';
import { MagicalFooter } from './components/MagicalFooter';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Achievements from './pages/Achievements';
import DSAStats from './pages/DSAStats';
// import Blogs from './pages/Blogs';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import ComingSoon from './pages/ComingSoon';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/dsa-stats" element={<DSAStats />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/blogs" element={<ComingSoon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Add dark class to body for consistent theming
    document.body.classList.add('dark');

    // Optional: Play ambient sound on load (commented out for now)
    // const audio = new Audio('/magical-ambient.mp3');
    // audio.volume = 0.1;
    // audio.loop = true;
    // audio.play().catch(() => {});

    return () => {
      document.body.classList.remove('dark');
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      {!loading && (
        <>
          <ScrollToTop />
          <MagicalCursor />
          <ParticleEffect />
          <MagicalNavigation />

          <main className="relative min-h-screen font-modern">
            <AnimatedRoutes />
            <MagicalFooter />
          </main>
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
