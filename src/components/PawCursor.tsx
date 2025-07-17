import React, { useState, useEffect } from 'react';

const PawCursor = () => {
  const [trails, setTrails] = useState<{ x: number; y: number; id: number }[]>([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: nextId
      };
      
      setTrails(prev => [...prev, newTrail].slice(-5)); // Keep last 5 trails
      setNextId(prev => prev + 1);
    };

    const handleMouseLeave = () => {
      setTrails([]);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [nextId]);

  // Clean up old trails
  useEffect(() => {
    const cleanup = setTimeout(() => {
      setTrails(prev => prev.slice(1));
    }, 1000);

    return () => clearTimeout(cleanup);
  }, [trails]);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="absolute w-4 h-4 bg-[#5B84B1] rounded-full animate-ping"
          style={{
            left: trail.x - 8,
            top: trail.y - 8,
            opacity: (index + 1) / trails.length,
            animationDelay: `${index * 100}ms`,
            animationDuration: '1s'
          }}
        />
      ))}
    </div>
  );
};

export default PawCursor;