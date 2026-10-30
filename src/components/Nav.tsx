"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { socials, type Social } from "@/data/socials";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
];

function SocialIcon({ social }: { social: Social }) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-silver transition-colors hover:bg-sky hover:text-ink"
    >
      {social.icon}
    </a>
  );
}

function NavLabel({ label, active }: { label: string; active: boolean }) {
  return (
    <span
      className={`font-gothic text-lg tracking-normal normal-case ${
        active ? "text-ink" : "text-gothic"
      }`}
    >
      {label}
    </span>
  );
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-8">
      <nav className="nav-chrome mx-auto flex max-w-5xl items-center justify-end rounded-full px-4 py-2.5 sm:justify-center">
        <ul className="hidden items-center gap-2 sm:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link flex items-center rounded-full px-4 py-1.5 transition-colors ${
                    active ? "bg-sky" : ""
                  }`}
                >
                  <NavLabel label={link.label} active={active} />
                </Link>
              </li>
            );
          })}
          <li className="ml-3 flex items-center gap-2 border-l border-white/20 pl-4">
            {socials.map((social) => (
              <SocialIcon key={social.label} social={social} />
            ))}
          </li>
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-cloud sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M2.5 5.5h15M2.5 10h15M2.5 14.5h15"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </nav>

      {open && (
        <ul className="nav-chrome mx-auto mt-2 flex max-w-5xl flex-col gap-1 rounded-3xl p-3 sm:hidden">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`nav-link flex items-center rounded-2xl px-3 py-2 transition-colors ${
                    active ? "bg-sky" : ""
                  }`}
                >
                  <NavLabel label={link.label} active={active} />
                </Link>
              </li>
            );
          })}
          <li className="mt-1 flex items-center gap-3 border-t border-white/20 px-3 pt-3">
            {socials.map((social) => (
              <SocialIcon key={social.label} social={social} />
            ))}
          </li>
        </ul>
      )}
    </header>
  );
}
