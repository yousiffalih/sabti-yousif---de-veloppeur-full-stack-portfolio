import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" /> Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Education
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Rigorous foundational training in computer science, operating systems, distributed algorithms, and software architecture.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {EDUCATION_DATA.map((edu) => (
            <div
              key={edu.id}
              className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md hover:border-emerald-500/40 transition-all duration-300 space-y-6 group flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors duration-300 shrink-0">
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  {edu.grade && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-bold">
                      {edu.grade}
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-emerald-400 font-semibold text-sm mt-1">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs font-mono text-zinc-400 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    {edu.location}
                  </span>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-zinc-800/80 space-y-2">
                  <h4 className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-emerald-400" /> Coursework & Honors
                  </h4>
                  <ul className="space-y-1.5 text-xs text-zinc-300">
                    {edu.highlights.map((h, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0 mt-1.5" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
