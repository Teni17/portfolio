"use client";

import { useId } from "react";
import { motion } from "framer-motion";

type BlobProps = {
  className?: string;
  colors: [string, string];
  size?: number;
  duration?: number;
  delay?: number;
};

export default function Blob({
  className = "",
  colors,
  size = 320,
  duration = 10,
  delay = 0,
}: BlobProps) {
  const gradientId = `blob-gradient-${useId()}`;

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none select-none ${className}`}
      animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        className="drop-shadow-[0_20px_40px_rgba(43,35,64,0.25)]"
      >
        <defs>
          <radialGradient id={gradientId} cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor={colors[0]} />
            <stop offset="100%" stopColor={colors[1]} />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="95" fill={`url(#${gradientId})`} />
        <ellipse
          cx="72"
          cy="62"
          rx="34"
          ry="20"
          fill="white"
          opacity="0.45"
        />
      </svg>
    </motion.div>
  );
}
