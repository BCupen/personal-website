"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  const squares = [
    { id: 1, x: 0, y: 0, size: 550 },
    { id: 2, x: 550, y: 0, size: 340 },
    { id: 3, x: 680, y: 340, size: 210 },
    { id: 4, x: 550, y: 420, size: 130 },
    { id: 5, x: 550, y: 340, size: 80 },
    { id: 6, x: 630, y: 340, size: 50 },
    { id: 7, x: 650, y: 390, size: 30 },
    { id: 8, x: 630, y: 400, size: 20 },
    { id: 9, x: 630, y: 390, size: 10 },
    { id: 10, x: 640, y: 390, size: 10 },
  ];

  const spiralPath =
    "M 0 550 " +
    "A 550 550 0 0 1 550 0 " +
    "A 340 340 0 0 1 890 340 " +
    "A 210 210 0 0 1 680 550 " +
    "A 130 130 0 0 1 550 420 " +
    "A 80 80 0 0 1 630 340 " +
    "A 50 50 0 0 1 680 390 " +
    "A 30 30 0 0 1 650 420 " +
    "A 20 20 0 0 1 630 400 " +
    "A 10 10 0 0 1 640 390";

  return (
    <motion.div className="absolute inset-0 z-[-1]">
      <svg
        className="w-full h-[90%]"
        viewBox="0 0 890 550"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        <motion.g
          className="text-primary/40 blur-[8px] drop-shadow-[0_0_10px_rgba(50,224,196,0.5)]"
          stroke="currentColor"
          strokeWidth={8}
        >
          {squares.map((square) => (
            <motion.rect
              key={square.id}
              x={square.x}
              y={square.y}
              width={square.size}
              height={square.size}
            />
          ))}
        </motion.g>

        <motion.path
          d={spiralPath}
          stroke="currentColor"
          className="text-foreground/60 blur-[3px] drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
          strokeWidth="5"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 4, ease: "easeInOut", delay: 0.2 },
            opacity: { duration: 0.5 },
          }}
        />
      </svg>
    </motion.div>
  );
}
