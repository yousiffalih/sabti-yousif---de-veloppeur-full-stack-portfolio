import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, FileText, Code2, Server } from 'lucide-react';
import { Theme } from '../types';

interface NavbarProps {
  theme: Theme;
  onToggleTheme: () => void;
  onOpenCV: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, onToggleTheme, onOpenCV }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'À Propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Expériences', href: '#experience' },
    { name: 'Formation', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 pt-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 px-5 py-3 flex items-center justify-between border ${scrolled
            ? theme === 'dark'
              ? 'bg-zinc-950/80 border-zinc-800/80 shadow-2xl backdrop-blur-xl shadow-emerald-950/20'
              : 'bg-white/80 border-zinc-200/80 shadow-lg backdrop-blur-xl'
            : theme === 'dark'
              ? 'bg-zinc-900/40 border-zinc-800/50 backdrop-blur-md'
              : 'bg-white/40 border-zinc-200/50 backdrop-blur-md'
          }`}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-105 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-all duration-300">
            <Server className="w-4 h-4" />
          </div>
          <span className="font-semibold text-sm sm:text-base tracking-tight text-zinc-100 dark:text-zinc-100 flex items-center gap-1.5">
            SABTI YOUSIF            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 font-mono border border-emerald-500/20 hidden sm:inline-block">
              .dev
            </span>
          </span>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={`px-3 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 relative ${isActive
                    ? 'text-emerald-400 bg-emerald-500/10 border border-emerald-500/20'
                    : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40'
                  }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenCV}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500 hover:text-zinc-950 transition-all duration-300 shadow-sm"
            title="View Resume CV"
          >
            <FileText className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume CV</span>
          </button>

          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark/light mode"
            className="p-2 rounded-full text-zinc-400 hover:text-zinc-100 bg-zinc-800/40 hover:bg-zinc-800 transition-colors border border-zinc-700/30"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyan-400" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="md:hidden p-2 rounded-full text-zinc-400 hover:text-zinc-100 bg-zinc-800/40 border border-zinc-700/30"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-zinc-900/95 border border-zinc-800 p-4 shadow-2xl backdrop-blur-xl animate-fadeIn space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="block px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-300 hover:text-emerald-400 hover:bg-zinc-800/60 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
