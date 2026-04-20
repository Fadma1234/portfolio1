import type { Metadata } from "next";

import { AboutSection } from "../components/AboutSection";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";

export const metadata = {
  title: "Modern Portfolio Website",
  description:
    "Modern personal portfolio website with a minimal neutral palette, selected work, concise about section, and a clear email contact path.",
  alternates: {
    canonical: "https://portfolio.example.com/",
  },
  openGraph: {
    title: "Modern Portfolio Website",
    description:
      "Modern personal portfolio website with a minimal neutral palette, selected work, concise about section, and a clear email contact path.",
    url: "https://portfolio.example.com/",
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

export default function Home(): JSX.Element {
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
