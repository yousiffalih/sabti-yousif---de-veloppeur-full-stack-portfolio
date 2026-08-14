import React from 'react';
import { Code2, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#030303]/90 text-zinc-400 text-xs py-12 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
              <Code2 className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-zinc-100 text-sm">{PERSONAL_INFO.name}</p>
              <p className="text-[11px] text-zinc-500 font-mono">{PERSONAL_INFO.title} • UHA 4.0 Bac+3</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-zinc-100 hover:bg-white/10 border border-white/10 transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-cyan-400 hover:bg-white/10 border border-white/10 transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-blue-400 hover:bg-white/10 border border-white/10 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/5 text-blue-400 hover:bg-white hover:text-zinc-950 border border-blue-500/30 transition-all duration-200 ml-2"
              title="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & tagline */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px]">
          <p className="text-zinc-500">
            © {new Date().getFullYear()} Sabti Yousif. Portfolio Développeur Full-Stack UHA 4.0.
          </p>

          <div className="flex items-center gap-2 font-mono text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span>Disponible pour un premier poste Full-Stack</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

