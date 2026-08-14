import React, { useState } from 'react';
import { X, ExternalLink, Github, Terminal, Zap, ShieldAlert, Cpu, CheckCircle2, Play } from 'lucide-react';
import { Project, ApiEndpoint } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint | null>(
    project?.apiEndpoints?.[0] || null
  );
  const [apiTesting, setApiTesting] = useState(false);
  const [apiResult, setApiResult] = useState<Record<string, any> | null>(null);

  if (!project) return null;

  const handleTestApi = (endpoint: ApiEndpoint) => {
    setApiTesting(true);
    setApiResult(null);

    setTimeout(() => {
      setApiResult(endpoint.responseExample);
      setApiTesting(false);
    }, endpoint.latencyMs * 15 + 200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#080808] border border-white/10 rounded-2xl shadow-2xl overflow-y-auto my-8 scrollbar-thin scrollbar-thumb-zinc-800">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/80 text-zinc-400 hover:text-zinc-100 hover:bg-white/10 border border-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-black">
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-md bg-blue-500/20 border border-blue-500/40 text-blue-400 font-mono text-xs font-semibold mb-2">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-100">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Action Links & Tech Stack */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-white/5 text-zinc-300 font-mono text-xs border border-white/10"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-200 text-xs font-semibold flex items-center gap-2 border border-white/10 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Code</span>
              </a>

              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 text-xs font-semibold flex items-center gap-2 transition-colors shadow-md"
              >
                <ExternalLink className="w-4 h-4 text-zinc-950" />
                <span>Live Demo</span>
              </a>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center">
                <p className="text-xl font-mono font-bold text-blue-400">{metric.value}</p>
                <p className="text-xs text-zinc-400 mt-1">{metric.label}</p>
              </div>
            ))}
          </div>

          {/* Description & Problem Statement */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-zinc-100 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span>Project Overview & Architecture</span>
            </h3>
            <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-1">
              <h4 className="text-xs font-mono font-semibold text-amber-400 flex items-center gap-1.5 uppercase">
                <ShieldAlert className="w-4 h-4" /> Problem Statement
              </h4>
              <p className="text-xs sm:text-sm text-amber-200/90 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>
          </div>

          {/* Architectural Highlights */}
          <div className="space-y-3">
            <h4 className="text-sm font-mono font-semibold text-zinc-300 uppercase tracking-wider">
              Key Engineering Accomplishments
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {project.architectureHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Live API Playground */}
          {project.apiEndpoints && project.apiEndpoints.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-zinc-100 flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-blue-400" />
                  <span>Interactive API Endpoint Tester</span>
                </h3>
                <span className="text-xs text-blue-400 font-mono bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
                  Live Test Sandbox
                </span>
              </div>

              <div className="bg-black/60 border border-white/10 rounded-xl p-4 font-mono text-xs space-y-4">
                
                {/* Endpoint selector */}
                <div className="flex flex-wrap gap-2">
                  {project.apiEndpoints.map((ep, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setSelectedEndpoint(ep);
                        setApiResult(null);
                      }}
                      className={`px-3 py-1.5 rounded-lg border text-xs flex items-center gap-2 transition-all ${
                        selectedEndpoint?.path === ep.path
                          ? 'bg-blue-500/20 border-blue-500 text-blue-300'
                          : 'bg-white/5 border-white/10 text-zinc-400 hover:text-zinc-200'
                      }`}
                    >
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                        ep.method === 'GET' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                        {ep.method}
                      </span>
                      <span className="truncate max-w-[200px]">{ep.path}</span>
                    </button>
                  ))}
                </div>

                {/* Selected endpoint details */}
                {selectedEndpoint && (
                  <div className="space-y-3 pt-2">
                    <p className="text-zinc-400 text-xs font-sans">
                      {selectedEndpoint.description}
                    </p>

                    <div className="flex items-center justify-between bg-black p-2.5 rounded-lg border border-white/10">
                      <div className="flex items-center gap-2 text-zinc-200 overflow-x-auto font-mono">
                        <span className="text-blue-400 font-bold">{selectedEndpoint.method}</span>
                        <span>{selectedEndpoint.path}</span>
                      </div>

                      <button
                        onClick={() => handleTestApi(selectedEndpoint)}
                        disabled={apiTesting}
                        className="px-3 py-1 rounded bg-white text-zinc-950 font-bold text-xs flex items-center gap-1.5 hover:bg-zinc-200 disabled:opacity-50 transition-colors shrink-0"
                      >
                        {apiTesting ? (
                          <>
                            <Zap className="w-3.5 h-3.5 animate-spin text-zinc-950" />
                            <span>Executing...</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-zinc-950" />
                            <span>Send Request</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* JSON Output Window */}
                    <div className="bg-black border border-white/10 rounded-lg p-3 text-xs overflow-x-auto text-blue-300 min-h-[100px] relative">
                      <div className="flex items-center justify-between text-[10px] text-zinc-500 border-b border-white/10 pb-1 mb-2">
                        <span>HTTP/1.1 200 OK</span>
                        <span className="flex items-center gap-1 text-blue-400">
                          <Zap className="w-3 h-3" /> Latency: {selectedEndpoint.latencyMs}ms
                        </span>
                      </div>

                      {apiTesting ? (
                        <div className="flex items-center justify-center py-6 text-zinc-500 gap-2 font-sans">
                          <Zap className="w-4 h-4 text-blue-400 animate-bounce" />
                          <span>Connecting to backend microservice cluster...</span>
                        </div>
                      ) : apiResult ? (
                        <pre className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed">
                          {JSON.stringify(apiResult, null, 2)}
                        </pre>
                      ) : (
                        <div className="text-zinc-500 text-center py-6 font-sans">
                          Click "Send Request" to test this backend endpoint response live.
                        </div>
                      )}
                    </div>

                  </div>
                )}

              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
