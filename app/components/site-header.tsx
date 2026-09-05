"use client";

import { useState } from "react";

const LINKS = [
  { href: "/#templates", label: "Templates" },
  { href: "/#why", label: "Why" },
  { href: "https://developer.lacspace.com", label: "Docs & Handbook", external: true },
  { href: "https://lacspace.com/create-app", label: "The CLI", external: true },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="/" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="brand-mark" src="/brand/mark.png" alt="Lacspace" width={26} height={26} />
          <span>
            Lacspace <span className="brand-sub">Templates</span>
          </span>
        </a>

        <nav className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} {...(l.external ? { target: "_blank", rel: "noopener" } : {})}>
              {l.label}
            </a>
          ))}
          <a className="nav-cta" href="https://developer.lacspace.com" target="_blank" rel="noopener">
            Developer Platform ↗
          </a>
        </nav>

        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span data-open={open} />
          <span data-open={open} />
          <span data-open={open} />
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              {...(l.external ? { target: "_blank", rel: "noopener" } : {})}
            >
              {l.label}
            </a>
          ))}
          <a href="https://developer.lacspace.com" target="_blank" rel="noopener" onClick={() => setOpen(false)}>
            Developer Platform ↗
          </a>
        </div>
      )}
    </header>
  );
}
