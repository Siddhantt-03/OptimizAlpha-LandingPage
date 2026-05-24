import React, { useRef, useState } from 'react';

interface SpotlightEffectProps {
  children: React.ReactNode;
  className?: string;
  opacity?: number;
}

export default function SpotlightEffect({ children, className = '', opacity = 0.15 }: SpotlightEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
    >
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 z-[1]"
          style={{
            background: `radial-gradient(600px circle at ${coords.x}px ${coords.y}px, rgba(23, 107, 135, ${opacity}), transparent 80%)`,
          }}
        />
      )}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
