import { SectionHeading } from "./SectionHeading";

const ABOUT_BIO =
  "\"I spent years helping people recover from injury, and that experience continues to shape how I build software today. Working in physical therapy taught me to pay attention to progress, setbacks, and the importance of clear, human-centered support. Now, as a software engineer, I build full-stack tools, data pipelines, and applied ML systems with that same perspective. My work includes a patient progress tracker that supports recovery consistency and a multilingual AI document assistant that helps non-English speakers make sense of critical paperwork. I’m looking to bring that blend of empathy and technical problem-solving to a team building meaningful, human-centered products.\"";

export function AboutSection(): JSX.Element {
  return (
    <section className="content-section" id="about">
      <div className="container section-grid">
        <SectionHeading
          description="A concise overview of the perspective that connects healthcare experience with full-stack engineering and applied AI work."
          eyebrow="About"
          title="Empathy, recovery thinking, and technical depth."
        />
        <div className="about-layout">
          <div className="about-card">
            <p>{ABOUT_BIO}</p>
          </div>
          <div aria-hidden="true" className="about-visual">
            <div className="about-visual-frame">
              <div className="about-visual-line about-visual-line-strong" />
              <div className="about-visual-line about-visual-line-medium" />
              <div className="about-visual-line about-visual-line-soft" />
              <div className="about-visual-grid">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
