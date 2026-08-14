import React, { useState } from 'react';
import {
  Server,
  Cpu,
  Code2,
  Layers,
  Globe,
  Layout,
  FileCode,
  Binary,
  Palette,
  Sparkles,
  Database,
  HardDrive,
  Boxes,
  Workflow,
  Container,
  GitBranch,
  Send,
  Terminal,
  Wrench,
  CheckCircle,
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { Skill } from '../types';

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Backend', 'Frontend', 'Database', 'DevOps & Tools'];

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  // Map iconName string to Lucide component
  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server': return Server;
      case 'Cpu': return Cpu;
      case 'Code2': return Code2;
      case 'Layers': return Layers;
      case 'Globe': return Globe;
      case 'Layout': return Layout;
      case 'FileCode': return FileCode;
      case 'Binary': return Binary;
      case 'Palette': return Palette;
      case 'Sparkles': return Sparkles;
      case 'Database': return Database;
      case 'HardDrive': return HardDrive;
      case 'Boxes': return Boxes;
      case 'Workflow': return Workflow;
      case 'Container': return Container;
      case 'GitBranch': return GitBranch;
      case 'Send': return Send;
      case 'Terminal': return Terminal;
      default: return Wrench;
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" /> Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Skills & Tech Stack
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Proficiency breakdown across backend engine frameworks, relational data persistence, full-stack tooling, and DevOps containers.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-white text-zinc-950 border-white shadow-md scale-105'
                  : 'bg-white/5 text-zinc-400 border-white/10 hover:text-zinc-200 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill: Skill) => {
            const IconComponent = getSkillIcon(skill.iconName);

            return (
              <div
                key={skill.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300 space-y-4 group relative overflow-hidden backdrop-blur-md"
              >
                {/* Glow Effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full blur-xl group-hover:bg-blue-500/10 transition-all pointer-events-none" />

                {/* Card Top Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-zinc-950 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-zinc-100 group-hover:text-blue-300 transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-[11px] text-zinc-400 font-mono">
                        {skill.category}
                      </p>
                    </div>
                  </div>


                </div>

                {/* Description */}
                <p className="text-xs text-zinc-400 leading-relaxed min-h-[36px]">
                  {skill.description}
                </p>


              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
