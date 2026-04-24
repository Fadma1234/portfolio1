import type { Metadata } from "next";
import type { ReactElement } from "react";

import { AboutSection } from "../components/AboutSection";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";

export const metadata = {
  title: {
    absolute: "Fadma's Portfolio",
  },
  description:
    "Fadma's portfolio showcases selected work, a concise bio, and a clear contact path for potential collaborators and employers.",
  alternates: {
    canonical: "https://portfolio1-delta-gules-52.vercel.app/",
  },
  openGraph: {
    title: "Fadma's Portfolio",
    description:
      "Fadma's portfolio showcases selected work, a concise bio, and a clear contact path for potential collaborators and employers.",
    url: "https://portfolio1-delta-gules-52.vercel.app/",
    images: [
      {
        url: "/og/home.svg",
        width: 1200,
        height: 630,
        alt: "Neutral portfolio website preview",
      },
    ],
  },
} satisfies Metadata;

export default function Home(): ReactElement {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
