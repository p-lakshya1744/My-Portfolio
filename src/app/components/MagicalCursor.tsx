import { useEffect, useState } from 'react';

export function MagicalCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Create spark particles
      const newParticle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
      };

      setParticles(prev => [...prev, newParticle]);

      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="hidden md:block fixed w-4 h-4 pointer-events-none z-[9999] mix-blend-screen"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="w-full h-full bg-[var(--gryffindor-gold)] rounded-full opacity-80 animate-pulse" />
      </div>

      {particles.map(particle => (
        <div
          key={particle.id}
          className="hidden md:block fixed w-1 h-1 pointer-events-none z-[9998] bg-[var(--ember-orange)] rounded-full animate-ping"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </>
  );
}
