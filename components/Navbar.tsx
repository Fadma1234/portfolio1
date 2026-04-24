"use client";

import type { ReactElement } from "react";
import { useEffect, useState } from "react";

import Link from "next/link";

const NAV_ITEMS = [
  { href: "#about", id: "about", label: "About" },
  { href: "#projects", id: "projects", label: "Projects" },
  { href: "#contact", id: "contact", label: "Contact" },
] as const;

export function Navbar(): ReactElement {
  const [activeSectionId, setActiveSectionId] = useState<string>("");

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(
      (section): section is HTMLElement => section !== null,
    );

    if (sections.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((entryA, entryB) => entryB.intersectionRatio - entryA.intersectionRatio);

        const [mostVisibleEntry] = visibleEntries;

        if (!mostVisibleEntry) {
          return;
        }

        setActiveSectionId(mostVisibleEntry.target.id);
      },
      {
        rootMargin: "-35% 0px -45% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <header className="site-header">
      <nav aria-label="Primary" className="container nav-shell">
        <Link className="brand-mark" href="#home">
          Fadma
        </Link>
        <div className="nav-links">
          {NAV_ITEMS.map((item) => (
            <Link
              aria-current={activeSectionId === item.id ? "page" : undefined}
              className={`nav-link ${activeSectionId === item.id ? "nav-link-active" : ""}`}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
