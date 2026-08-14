import React, { useEffect, useState } from 'react';
import { Theme } from '../types';

interface CursorGlowProps {
  theme: Theme;
}

export const CursorGlow: React.FC<CursorGlowProps> = ({ theme }) => {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const glowColor =
    theme === 'dark'
      ? 'radial-gradient(600px at var(--x) var(--y), rgba(59, 130, 246, 0.08), transparent 80%)'
      : 'radial-gradient(600px at var(--x) var(--y), rgba(37, 99, 235, 0.06), transparent 80%)';

  return (
    <div
      className="pointer-events-none fixed inset-0 z-10 transition-opacity duration-300 hidden md:block"
      style={
        {
          '--x': `${pos.x}px`,
          '--y': `${pos.y}px`,
          background: glowColor,
        } as React.CSSProperties
      }
    />
  );
};
