import React from 'react';
import { Server, Database, ShieldCheck, Cpu, Code2, Layers, CheckCircle2, Globe, Heart, MapPin, Mail, Phone, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const corePrinciples = [
    {
      title: 'Développement Full-Stack Réactif',
      description: 'Conception d\'interfaces web et mobiles performantes avec React, Next.js et React Native.',
      icon: Code2,
    },
    {
      title: 'Bases de Données & APIs REST',
      description: 'Modélisation relationnelle et NoSQL (PostgreSQL, MySQL, MongoDB, SQLite) et endpoints optimisés.',
      icon: Database,
    },
    {
      title: 'Architecture & Pédagogie UHA 4.0',
      description: 'Développement orienté projets réels d\'entreprise en méthodes agiles Scrum & Kanban.',
      icon: GraduationCap,
    },
    {
      title: 'Containerisation & Outillage',
      description: 'Environnements de développement isolés avec Docker, gestion de versions Git/GitHub, Jira et Confluence.',
      icon: Server,
    },
  ];

  const lovedTechnologies = [
    'React & Next.js',
    'Node.js & Express',
    'Java & Spring Boot',
    'React Native (Mobile)',
    'TypeScript & JavaScript',
    'PostgreSQL & MySQL',
    'MongoDB & SQLite',
    'Docker & Git',
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" /> À Propos & Profil
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Sabti Yousif — Développeur Full-Stack
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Diplômé d'une Licence (Bac+3) en Informatique de l'Université de Haute-Alsace (UHA 4.0).
          </p>
        </div>

        {/* Grid Layout: My Story + Core Values */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* My Story Card */}
          <div className="lg:col-span-6 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md space-y-6 relative overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
            
            <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2.5">
              <Layers className="w-5 h-5 text-blue-400" />
              <span>Mon Parcours & Objectif</span>
            </h3>

            <div className="space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                Passionné par le développement logiciel web et mobile, j'ai suivi la formation exigeante <strong>Programme UHA 4.0 (Niveau Bac+3)</strong> à l'Université de Haute-Alsace à Mulhouse (2024 - 2026).
              </p>
              <p>
                Grâce à cette pédagogie immersive centrée sur des projets concrets pour des entreprises et des associations, j'ai développé une maîtrise solide de la stack <strong>React, Node.js, Java, Spring Boot, TypeScript et React Native</strong>.
              </p>
              <p>
                Aujourd'hui, je recherche mon premier poste de <strong>Développeur Full-Stack</strong> afin de mettre en pratique mes compétences techniques, relever de nouveaux défis et continuer à progresser au sein d'une équipe dynamique.
              </p>
            </div>

            {/* Languages & Interests */}
            <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="space-y-2">
                <h4 className="font-bold text-blue-400 uppercase flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5" /> Langues
                </h4>
                <ul className="space-y-1 text-zinc-300">
                  {PERSONAL_INFO.languages?.map((lang, idx) => (
                    <li key={idx} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span>{lang}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-bold text-blue-400 uppercase flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5" /> Centres d'intérêt
                </h4>
                <div className="flex flex-wrap gap-1.5 text-zinc-300">
                  {PERSONAL_INFO.interests?.map((interest, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies I Enjoy Working With */}
            <div className="pt-4 border-t border-white/10 space-y-3">
              <h4 className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                Compétences Clés
              </h4>
              <div className="flex flex-wrap gap-2">
                {lovedTechnologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/60 border border-white/10 text-zinc-300 text-xs font-medium hover:border-blue-500/40 hover:text-blue-400 transition-colors"
                  >
                    <CheckCircle2 className="w-3 h-3 text-blue-400" />
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Principles Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {corePrinciples.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-zinc-950 transition-colors duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-zinc-200 group-hover:text-blue-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

