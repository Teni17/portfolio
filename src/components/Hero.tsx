"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { socials } from "@/data/socials";

const Rain = dynamic(() => import("@/components/decorative/Rain"), {
  ssr: false,
});

const links = [
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
];

const RED_HOLD_MS = 4000;

type Phase = "blood" | "red-hold" | "water" | "normal";

export default function Hero() {
  const [phase, setPhase] = useState<Phase>("blood");

  useEffect(() => {
    if (phase !== "red-hold") return;
    const timer = setTimeout(() => setPhase("water"), RED_HOLD_MS);
    return () => clearTimeout(timer);
  }, [phase]);

  const isRed = phase === "red-hold" || phase === "water";
  const showRain = phase === "blood" || phase === "water";

  return (
    <section className="fixed inset-0 flex items-center justify-center px-6 text-center">
      <Image
        src="/images/hero-lobby.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1826]/85 via-[#0a1826]/55 to-[#0a1826]/85" />

      {showRain && (
        <Rain
          variant={phase === "blood" ? "blood" : "water"}
          onComplete={() =>
            setPhase(phase === "blood" ? "red-hold" : "normal")
          }
        />
      )}

      <div className="relative z-10">
        <h1
          className={`font-gothic text-6xl normal-case sm:text-8xl ${
            isRed ? "text-gothic-red" : "text-gothic"
          }`}
        >
          Teni Olugboyega
        </h1>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link rounded-full px-6 py-3 transition-transform hover:-translate-y-0.5 ${
                isRed ? "nav-chrome-red nav-link-red" : "nav-chrome"
              }`}
            >
              <span
                className={`font-gothic text-lg normal-case ${
                  isRed ? "text-gothic-red" : "text-gothic"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`flex h-[52px] w-[52px] items-center justify-center rounded-full text-silver transition-colors ${
                isRed
                  ? "nav-chrome-red hover:text-blood"
                  : "nav-chrome hover:text-sky"
              }`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
