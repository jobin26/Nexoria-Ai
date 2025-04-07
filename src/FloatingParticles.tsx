import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export default function FloatingParticles() {
  const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });
  const particleCount = 70;

  const [particles, setParticles] = useState<Position[]>([]);

  useEffect(() => {
    const positions = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setParticles(positions);
  }, []);

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          filter: "blur(20px) contrast(100)",
          mixBlendMode: "screen",
        }}
      >
        {particles.map((pos, i) => {
          const dx = mousePos.x - pos.x;
          const dy = mousePos.y - pos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const magnetRange = 400;
          const pull = distance < magnetRange ? (1 - distance / magnetRange) * 30 : 0;

          const offsetX = ((dx / distance) * pull || 0).toFixed(2);
          const offsetY = ((dy / distance) * pull || 0).toFixed(2);

          return (
            <div
              key={i}
              className="absolute bg-cyan-300"
              style={{
                width: "18px",
                height: "18px",
                left: `${pos.x}px`,
                top: `${pos.y}px`,
                transform: `translate(${offsetX}px, ${offsetY}px)`,
                borderRadius: "9999px",
                transition: "transform 0.2s ease-out",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
