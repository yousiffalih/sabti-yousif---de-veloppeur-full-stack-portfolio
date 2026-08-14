import React from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" /> Industry Verified
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Professional Certifications
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Formally accredited competencies across cloud architecture, container management, enterprise Java, and microservices security.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 backdrop-blur-md hover:border-emerald-500/40 transition-all duration-300 space-y-4 group relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-zinc-950 transition-colors duration-300 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-zinc-100 group-hover:text-emerald-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-emerald-400 text-xs font-semibold mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-800/80 text-zinc-400 hover:text-emerald-400 hover:bg-zinc-800 transition-colors border border-zinc-700/50 shrink-0"
                  title="Verify Credential"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Credential Meta */}
              <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pt-2 border-t border-zinc-800/80">
                <span>ID: <strong className="text-zinc-200">{cert.credentialId}</strong></span>
                <span>Issued: <strong className="text-emerald-400">{cert.issueDate}</strong></span>
              </div>

              {/* Skills Verified Tags */}
              <div className="space-y-1.5 pt-1">
                <p className="text-[11px] font-mono text-zinc-500 uppercase">Verified Competencies:</p>
                <div className="flex flex-wrap gap-1.5">
                  {cert.skillsVerified.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 rounded bg-zinc-950/80 border border-zinc-800 text-zinc-300 font-mono text-[11px]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
