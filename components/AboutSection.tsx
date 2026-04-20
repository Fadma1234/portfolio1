import Image from "next/image";

const ABOUT_BIO =
  "\"I spent years helping people recover from injury, and that experience continues to shape how I build software today. Working in physical therapy taught me to pay attention to progress, setbacks, and the importance of clear, human-centered support. Now, as a software engineer, I build full-stack tools, data pipelines, and applied ML systems with that same perspective. My work includes a patient progress tracker that supports recovery consistency and a multilingual AI document assistant that helps non-English speakers make sense of critical paperwork. I’m looking to bring that blend of empathy and technical problem-solving to a team building meaningful, human-centered products.\"";

export function AboutSection(): JSX.Element {
  return (
    <section className="content-section" id="about">
      <div className="container">
        <div className="about-content">
          <p className="eyebrow section-title-label">About</p>
          <div className="about-image-wrap">
            <Image
              alt="Fadma Belkhouraf smiling outdoors"
              className="about-image"
              height={1024}
              priority={false}
              src="/about-fadma.png"
              width={768}
            />
          </div>
          <div className="about-card">
            <p>{ABOUT_BIO}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
