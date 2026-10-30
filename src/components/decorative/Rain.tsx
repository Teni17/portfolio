"use client";

import { useEffect, useState } from "react";

const STREAK_COUNT = 60;
const RAIN_MS = 4000;
const FADE_MS = 1000;

type Streak = {
  left: number;
  height: number;
  width: number;
  duration: number;
  delay: number;
};

type RainProps = {
  variant: "blood" | "water";
  onComplete: () => void;
};

export default function Rain({ variant, onComplete }: RainProps) {
  const [streaks] = useState<Streak[]>(() =>
    Array.from({ length: STREAK_COUNT }, () => ({
      left: Math.random() * 100,
      height: 60 + Math.random() * 120,
      width: 1 + Math.random() * 2,
      duration: 0.6 + Math.random() * 0.8,
      delay: Math.random() * 1.2,
    })),
  );
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), RAIN_MS);
    const doneTimer = setTimeout(onComplete, RAIN_MS + FADE_MS);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  const streakClass = variant === "blood" ? "blood-streak" : "water-streak";

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 z-20 overflow-hidden transition-opacity duration-1000 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      {streaks.map((streak, i) => (
        <span
          key={i}
          className={streakClass}
          style={{
            left: `${streak.left}%`,
            height: `${streak.height}px`,
            width: `${streak.width}px`,
            animationDuration: `${streak.duration}s`,
            animationDelay: `${streak.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
