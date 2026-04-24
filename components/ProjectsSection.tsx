import Image from "next/image";
import Link from "next/link";
import type { ReactElement } from "react";

interface ProjectLink {
  href: string;
  label: string;
}

interface Project {
  imageAlt: string;
  imageSrc: string;
  name: string;
  summary: string;
  tags: readonly string[];
  links: readonly ProjectLink[];
}

const PROJECTS: readonly Project[] = [
  {
    imageAlt: "NanoChat project interface screenshot",
    imageSrc: "/images/nanochat-project.png",
    name: "NanoChat App",
    summary: "AI chat interface project",
    tags: ["AI", "Chat UI", "Hugging Face"],
    links: [
      {
        href: "https://huggingface.co/spaces/Fadma12345/nanochat",
        label: "Live Demo",
      },
      {
        href: "https://github.com/Fadma1234/nanochat-app",
        label: "GitHub",
      },
    ],
  },
  {
    imageAlt: "Evaluation Project interface screenshot",
    imageSrc: "/images/evaluation-project.png",
    name: "Evaluation Project",
    summary: "ML evaluation experiments",
    tags: ["Machine Learning", "Evaluation", "Experiments"],
    links: [
      {
        href: "https://web-five-kappa-30.vercel.app/",
        label: "Live Demo",
      },
      {
        href: "https://github.com/Fadma1234/eval1",
        label: "GitHub",
      },
    ],
  },
  {
    imageAlt: "Patient Tracker project screenshot",
    imageSrc: "/images/patient-tracker-project.png",
    name: "Patient Tracker App",
    summary: "Full-stack app for tracking patient recovery progress",
    tags: ["Full Stack", "Healthcare", "Tracking"],
    links: [
      {
        href: "https://patient-tracker-2.onrender.com/",
        label: "Live Demo",
      },
      {
        href: "https://github.com/Fadma1234/patient-tracker",
        label: "GitHub",
      },
    ],
  },
  {
    imageAlt: "Shopify theme storefront screenshot",
    imageSrc: "/images/shopify-theme-work.png",
    name: "Shopify Theme Work",
    summary: "Shopify storefront theme work presented as a polished ecommerce interface.",
    tags: ["Shopify", "Theme Work", "Storefront"],
    links: [
      {
        href: "https://github.com/Fadma1234/theme1",
        label: "GitHub",
      },
    ],
  },
] as const;

function ExternalLinkIcon(): ReactElement {
  return (
    <svg
      aria-hidden="true"
      className="external-link-icon"
      viewBox="0 0 16 16"
    >
      <path
        d="M5 3h8v8m0-8L3 13"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function ProjectsSection(): ReactElement {
  return (
    <section className="content-section" id="projects">
      <div className="container">
        <p className="eyebrow section-title-label">Projects</p>
        <div className="project-grid">
          {PROJECTS.map((project) => (
            <article
              className={`project-card ${project.name === "Shopify Theme Work" ? "project-card-centered" : ""}`}
              key={project.name}
            >
              <div className="project-media">
                <Image
                  alt={project.imageAlt}
                  className="project-image"
                  height={576}
                  src={project.imageSrc}
                  width={1024}
                />
              </div>
              <div className="project-header">
                <h3 className="project-title">{project.name}</h3>
              </div>
              <p className="project-summary">{project.summary}</p>
              <ul aria-label={`${project.name} tags`} className="tag-list">
                {project.tags.map((tag) => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
              {project.links.length > 0 ? (
                <div className="project-links">
                  {project.links.map((link) => (
                    <Link
                      className="project-link"
                      href={link.href}
                      key={link.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <span>{link.label}</span>
                      <ExternalLinkIcon />
                    </Link>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
