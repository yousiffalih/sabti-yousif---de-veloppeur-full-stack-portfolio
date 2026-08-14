import React, { useState } from 'react';
import { ExternalLink, Github, Code2, Terminal, Cpu, ArrowUpRight, Sparkles } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'E-commerce', 'AI & ML', 'Microservices', 'Real-time'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" /> Featured Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Production-tested backend implementations showcasing microservices, vector search, distributed locks, and real-time event streaming.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeCategory === cat
                  ? 'bg-emerald-500 text-zinc-950 border-emerald-400 shadow-md shadow-emerald-950/40 scale-105'
                  : 'bg-zinc-900/60 text-zinc-400 border-zinc-800 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900/70 border border-zinc-800/80 rounded-2xl overflow-hidden hover:border-emerald-500/40 transition-all duration-300 group flex flex-col backdrop-blur-md shadow-xl"
            >
              
              {/* Image & Category Overlay */}
              <div
                onClick={() => setSelectedProject(project)}
                className="relative h-56 sm:h-64 overflow-hidden bg-zinc-950 cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-md bg-zinc-950/80 border border-zinc-800 text-emerald-400 font-mono text-xs font-semibold backdrop-blur-md">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-md bg-amber-500/20 border border-amber-500/40 text-amber-300 font-mono text-[11px] font-semibold flex items-center gap-1 backdrop-blur-md">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                {/* Bottom Metrics Pill */}
                <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 overflow-x-auto">
                  {project.metrics.map((m, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-zinc-950/80 border border-zinc-800 text-zinc-300 font-mono text-[10px] shrink-0 backdrop-blur-md"
                    >
                      <strong className="text-emerald-400">{m.label}:</strong> {m.value}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                
                <div className="space-y-2">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-xl font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors cursor-pointer flex items-center justify-between"
                  >
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed line-clamp-2">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-md bg-zinc-800/60 text-zinc-300 font-mono text-[11px] border border-zinc-700/40"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500 hover:text-zinc-950 text-xs font-semibold flex items-center gap-1.5 transition-all duration-200"
                  >
                    <Terminal className="w-3.5 h-3.5" />
                    <span>View API & Specs</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-zinc-100 hover:bg-zinc-700 border border-zinc-700/50 transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-zinc-800 text-zinc-300 hover:text-emerald-400 hover:bg-zinc-700 border border-zinc-700/50 transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />

      </div>
    </section>
  );
};
