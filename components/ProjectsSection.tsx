import Link from "next/link";

import { SectionHeading } from "./SectionHeading";

interface ProjectLink {
  href: string;
  label: string;
}

interface Project {
  name: string;
  summary: string;
  tags: readonly string[];
  links: readonly ProjectLink[];
}

const PROJECTS: readonly Project[] = [
  {
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
    name: "Evaluation Project",
    summary: "ML evaluation experiments",
    tags: ["Machine Learning", "Evaluation", "Experiments"],
    links: [
      {
        href: "https://github.com/Fadma1234/eval1",
        label: "GitHub",
      },
    ],
  },
  {
    name: "Portfolio Website",
    summary:
      "Personal portfolio website built to present projects, experience, and contact details with a clean responsive layout.",
    tags: ["Next.js", "Responsive Design", "Portfolio"],
    links: [
      {
        href: "https://web-five-kappa-30.vercel.app/",
        label: "Live Demo",
      },
    ],
  },
  {
    name: "Theme UI Project",
    summary:
      "Theme-focused frontend project exploring reusable styling patterns and polished interface presentation.",
    tags: ["Theme UI", "Frontend", "Design System"],
    links: [
      {
        href: "https://github.com/Fadma1234/theme1",
        label: "GitHub",
      },
    ],
  },
  {
    name: "Shopify Theme Work",
    summary:
      "Shopify theme customization work focused on storefront presentation and content editing.",
    tags: ["Shopify", "Theme Customization", "E-commerce"],
    links: [
      {
        href: "https://admin.shopify.com/store/fadma-slhmukyw/themes/153002934458/editor",
        label: "Theme Editor",
      },
    ],
  },
  {
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
] as const;

function ExternalLinkIcon(): JSX.Element {
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

export function ProjectsSection(): JSX.Element {
  return (
    <section className="content-section" id="projects">
      <div className="container">
        <SectionHeading
          description="A selection of applied AI, full-stack, and frontend work presented in a clean responsive grid."
          eyebrow="Projects"
          title="Projects built around practical problem-solving."
        />
        <div className="project-grid">
          {PROJECTS.map((project) => (
            <article className="project-card" key={project.name}>
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
