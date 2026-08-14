import React, { useState } from 'react';
import { X, Download, Copy, Check, FileText, Printer, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCE_DATA, SKILLS_DATA, EDUCATION_DATA, CERTIFICATIONS_DATA } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const cvContent = `
${PERSONAL_INFO.name.toUpperCase()}
${PERSONAL_INFO.title}
Email: ${PERSONAL_INFO.email} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY:
${PERSONAL_INFO.bio}

EXPERIENCE:
${EXPERIENCE_DATA.map(e => `
- ${e.role} at ${e.company} (${e.period})
  ${e.description.join('\n  ')}
  Tech: ${e.technologies.join(', ')}
`).join('\n')}

EDUCATION:
${EDUCATION_DATA.map(ed => `- ${ed.degree}, ${ed.institution} (${ed.period}) - GPA: ${ed.grade}`).join('\n')}

CERTIFICATIONS:
${CERTIFICATIONS_DATA.map(c => `- ${c.title} (${c.issuer}, ID: ${c.credentialId})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(cvContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#080808] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto my-8 scrollbar-thin scrollbar-thumb-zinc-800 p-6 sm:p-8 space-y-6 text-zinc-200">
        
        {/* Modal Top Actions */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2 text-blue-400 font-mono text-xs font-semibold">
            <FileText className="w-4 h-4" />
            <span>CURRICULUM_VITAE_ALEX_VANCE.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300 text-xs font-semibold flex items-center gap-1.5 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-blue-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied Text' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-bold flex items-center gap-1.5 transition-colors shadow-md"
            >
              <Printer className="w-3.5 h-3.5 text-zinc-950" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-zinc-100 transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Formatted Resume Sheet */}
        <div className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-xl font-sans space-y-6 text-xs sm:text-sm leading-relaxed">
          
          {/* Resume Header */}
          <div className="border-b border-white/10 pb-4 space-y-1">
            <h1 className="text-2xl font-bold text-zinc-100">{PERSONAL_INFO.name}</h1>
            <p className="text-blue-400 font-medium">{PERSONAL_INFO.title}</p>
            <p className="text-zinc-400 text-xs font-mono pt-1">
              {PERSONAL_INFO.email} • {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Bio */}
          <div className="space-y-1.5">
            <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
              Professional Summary
            </h2>
            <p className="text-zinc-300">{PERSONAL_INFO.bio}</p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-white/10 pb-1">
              Work Experience
            </h2>
            {EXPERIENCE_DATA.map((exp) => (
              <div key={exp.id} className="space-y-1.5">
                <div className="flex justify-between items-baseline font-semibold text-zinc-200">
                  <span>{exp.role} — <span className="text-blue-300">{exp.company}</span></span>
                  <span className="font-mono text-xs text-zinc-400">{exp.period}</span>
                </div>
                <ul className="space-y-1 text-zinc-300 pl-4 list-disc text-xs">
                  {exp.description.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-white/10 pb-1">
              Education
            </h2>
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.id} className="flex justify-between items-baseline text-xs text-zinc-300">
                <span><strong>{edu.degree}</strong>, {edu.institution}</span>
                <span className="font-mono text-zinc-400">{edu.period} ({edu.grade})</span>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider border-b border-white/10 pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.id} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{cert.title} ({cert.issuer})</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
