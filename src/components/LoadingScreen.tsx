import React, { useEffect, useState } from 'react';
import { Terminal, Server, CheckCircle2 } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const logMessages = [
      'Booting Microservices Core Kernel v2.4.0...',
      'Initializing PostgreSQL connection pools...',
      'Mounting Redis distributed cache cluster...',
      'Loading REST API route handlers & middleware...',
      'Starting System Telemetry & Prometheus metrics...',
      'Server ready on 0.0.0.0:3000 (0ms latency)',
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < logMessages.length) {
        setLogs((prev) => [...prev, logMessages[currentStep]]);
        currentStep++;
        setProgress(Math.min(Math.round((currentStep / logMessages.length) * 100), 100));
      } else {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 400);
      }
    }, 280);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-zinc-950 flex flex-col items-center justify-center p-6 text-zinc-200 font-mono">
      <div className="w-full max-w-lg bg-zinc-900/90 border border-zinc-800 rounded-xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
        {/* Subtle glowing background light */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Console Header */}
        <div className="flex items-center justify-between border-b border-zinc-800 pb-3 mb-4">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>alexvance-backend-init.sh</span>
          </div>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
        </div>

        {/* Logs */}
        <div className="space-y-2 h-44 overflow-y-auto text-xs sm:text-sm text-zinc-300 scrollbar-thin scrollbar-thumb-zinc-800">
          {logs.map((log, index) => (
            <div key={index} className="flex items-start gap-2 animate-fadeIn">
              <span className="text-emerald-500 shrink-0">➜</span>
              <span className={index === logs.length - 1 ? 'text-emerald-300 font-semibold' : 'text-zinc-400'}>
                {log}
              </span>
              {index === logs.length - 1 && (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-auto animate-pulse" />
              )}
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-6 pt-4 border-t border-zinc-800/80">
          <div className="flex justify-between items-center text-xs text-zinc-400 mb-2">
            <span className="flex items-center gap-1.5 text-emerald-400 font-sans">
              <Server className="w-3.5 h-3.5" /> Building Portfolio Environment
            </span>
            <span className="font-semibold text-emerald-400">{progress}%</span>
          </div>
          <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
