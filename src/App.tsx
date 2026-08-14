import React, { useState, useEffect } from 'react';
import { Theme } from './types';
import { ParticleBackground } from './components/ParticleBackground';
import { CursorGlow } from './components/CursorGlow';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { CVModal } from './components/CVModal';
import { Footer } from './components/Footer';

export default function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [isLoading, setIsLoading] = useState(true);
  const [cvModalOpen, setCvModalOpen] = useState(false);

  useEffect(() => {
    // Update HTML root element class for dark/light mode
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 font-sans relative ${
        theme === 'dark' ? 'bg-zinc-950 text-zinc-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Top Scroll Progress Line */}
      <ScrollProgress />

      {/* Interactive Background Canvas */}
      <ParticleBackground theme={theme} />

      {/* Subtle Mouse Following Glow Effect */}
      <CursorGlow theme={theme} />

      {/* Floating Header Navbar */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenCV={() => setCvModalOpen(true)}
      />

      {/* Main Portfolio Content */}
      <main className="relative z-10">
        <Hero onOpenCV={() => setCvModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />

      {/* Curriculum Vitae Resume Modal */}
      <CVModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </div>
  );
}
