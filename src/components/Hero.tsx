import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Terminal, ShieldCheck, Zap, Server, Code2, Smartphone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenCV: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCV }) => {
  const [typedCodeIndex, setTypedCodeIndex] = useState(0);

  const codeSnippets = [
    `// React & Node.js Full-Stack App\nconst app = express();\napp.use(cors());\napp.get("/api/v1/projects", async (req, res) => {\n  const data = await db.query("SELECT * FROM uha_projects");\n  res.json({ status: "success", data });\n});`,
    `// Spring Boot REST Controller\n@RestController\n@RequestMapping("/api/v1/uha")\npublic class ProjectController {\n  @GetMapping("/status")\n  public ResponseEntity<String> getStatus() {\n    return ResponseEntity.ok("UHA 4.0 Bac+3 Active");\n  }\n}`,
    `// React Native EventEase App\nexport const EventCard = ({ event }) => (\n  <View style={styles.card}>\n    <Text style={styles.title}>{event.title}</Text>\n    <Badge label="SQLite Off-line" />\n  </View>\n);`,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedCodeIndex((prev) => (prev + 1) % codeSnippets.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [codeSnippets.length]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
              <span>Disponible pour un poste de Développeur Full-Stack</span>
            </div>

            {/* Main Name & Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-100 tracking-tight leading-none">
                Bonjour, je suis <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">{PERSONAL_INFO.name}</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-zinc-300 tracking-tight flex items-center justify-center lg:justify-start gap-3">
                <Code2 className="w-7 h-7 text-blue-400 shrink-0" />
                <span>{PERSONAL_INFO.title}</span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 py-3 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <span>Découvrir mes projets</span>
                <ArrowRight className="w-4 h-4 text-zinc-950" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="px-6 py-3 rounded-xl bg-white/5 text-zinc-200 border border-white/10 hover:border-blue-500/50 hover:text-blue-400 font-semibold text-sm hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>Me Contacter</span>
              </button>

              <button
                onClick={onOpenCV}
                className="px-6 py-3 rounded-xl bg-white/5 text-zinc-300 border border-white/10 hover:border-white/20 font-semibold text-sm hover:text-zinc-100 transition-all duration-200 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Consulter / Imprimer CV</span>
              </button>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-white/10">
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-3 rounded-xl text-center lg:text-left hover:border-blue-500/30 transition-colors">
                  <p className="text-xl sm:text-2xl font-bold font-mono text-blue-400">{stat.value}</p>
                  <p className="text-xs text-zinc-400 font-sans mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Avatar & Terminal Widget */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            
            {/* Interactive Terminal Code Card */}
            <div className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl p-4 shadow-xl backdrop-blur-md font-mono text-xs text-zinc-300 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                <div className="flex items-center gap-2 text-zinc-400">
                  <Terminal className="w-3.5 h-3.5 text-blue-400" />
                  <span>sabti_yousif_stack.ts</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
              </div>

              <pre className="text-zinc-300 overflow-x-auto whitespace-pre-wrap leading-relaxed h-28 font-mono text-[11px] sm:text-xs">
                <code>{codeSnippets[typedCodeIndex]}</code>
              </pre>

              <div className="mt-2 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-zinc-500">
                <span className="flex items-center gap-1 text-blue-400">
                  <Zap className="w-3 h-3" /> React / Node / Java / Spring Boot
                </span>
                <span>Thann, France</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

