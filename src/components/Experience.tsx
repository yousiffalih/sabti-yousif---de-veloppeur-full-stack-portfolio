import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award, Building2, Wrench, ShieldCheck, Code2 } from 'lucide-react';
import { EXPERIENCE_DATA, OTHER_EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tech' | 'other'>('tech');

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" /> Expériences & Parcours
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Expériences Professionnelles
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Mon parcours en développement informatique full-stack ainsi que mes expériences de terrain.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('tech')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold font-mono transition-all duration-200 ${
                activeTab === 'tech'
                  ? 'bg-blue-500 text-zinc-950 shadow-lg'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Expériences Informatique ({EXPERIENCE_DATA.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('other')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold font-mono transition-all duration-200 ${
                activeTab === 'other'
                  ? 'bg-blue-500 text-zinc-950 shadow-lg'
                  : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span>Autres Expériences ({OTHER_EXPERIENCE_DATA.length})</span>
            </button>
          </div>
        </div>

        {/* Tech Experiences Timeline */}
        {activeTab === 'tech' && (
          <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 animate-fadeIn">
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.id} className="relative group">
                
                {/* Timeline Icon Node */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-0 w-8 h-8 rounded-full bg-black border-2 border-blue-500 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-zinc-950 transition-colors duration-300 shadow-md">
                  <Building2 className="w-4 h-4" />
                </div>

                {/* Main Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300 space-y-6">
                  
                  {/* Header row */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-100 group-hover:text-blue-300 transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400 font-semibold text-sm flex items-center gap-2 mt-0.5">
                        <span>{exp.company}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-xs text-zinc-400 font-mono flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-zinc-500" /> {exp.location}
                        </span>
                      </p>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-400 bg-black/60 border border-white/10 px-3 py-1.5 rounded-lg w-fit">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      <span>{exp.period}</span>
                      <span className="px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-400 font-semibold text-[10px]">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  {/* Bullet Responsibilities */}
                  <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Achievements Box */}
                  {exp.achievements.length > 0 && (
                    <div className="p-4 rounded-xl bg-blue-500/5 border border-blue-500/20 space-y-2">
                      <h4 className="text-xs font-mono font-semibold text-blue-400 flex items-center gap-1.5 uppercase">
                        <Award className="w-4 h-4" /> Points Forts & Résultats
                      </h4>
                      <div className="space-y-1">
                        {exp.achievements.map((ach, idx) => (
                          <p key={idx} className="text-xs text-zinc-300 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            <span>{ach}</span>
                          </p>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies used */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-black/60 border border-white/10 text-zinc-400 font-mono text-xs hover:text-blue-400 hover:border-blue-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

        {/* Other Experiences Grid */}
        {activeTab === 'other' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {OTHER_EXPERIENCE_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300 space-y-4 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-bold text-zinc-100 group-hover:text-blue-300 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-blue-400 font-semibold text-sm flex items-center gap-1.5 mt-0.5">
                        <span>{item.company}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-xs text-zinc-400 font-mono">{item.location}</span>
                      </p>
                    </div>

                    <span className="px-2.5 py-1 rounded-lg bg-black/60 border border-white/10 text-zinc-300 font-mono text-xs font-semibold shrink-0">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
                    {item.details}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/5 text-zinc-400 font-mono text-[11px]"
                    >
                      ✓ {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
