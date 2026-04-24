import Link from "next/link";
import type { ReactElement } from "react";

export function HeroSection(): ReactElement {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="hero-shell">
          <div className="hero-copy">
            <p className="eyebrow">Full Stack Software Engineer & AI Engineer</p>
            <h1>Fadma Belkhouraf</h1>
            <p className="hero-tagline">
              Building human-centered software inspired by real healthcare
              experience
            </p>
            <p className="hero-description">
              I design and build thoughtful digital products with a strong focus
              on clarity, usability, and real-world impact.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="#projects">
                View Projects
              </Link>
              <Link className="button button-secondary" href="#contact">
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
