"use client";

import Link from "next/link";
import { certificates, education, experiences, profile, projects, research, skillGroups } from "@/lib/portfolio";

const deckSlides = [
  {
    eyebrow: profile.subtitle,
    title: profile.name,
    body: profile.description,
    accent: "Portfolio Snapshot",
    points: [profile.location, profile.email, "Backend · Data · AI Research"],
  },
  {
    eyebrow: "Education",
    title: education.school,
    body: `${education.degree} · ${education.date}`,
    accent: "Academic foundation",
    points: education.stats.map((stat) => `${stat.label}: ${stat.value}${stat.suffix ?? ""}`),
  },
  {
    eyebrow: "Experience",
    title: "Engineering internships",
    body: "Hands-on backend, AI workflow, observability, dashboarding, and data pipeline delivery.",
    accent: "Work highlights",
    points: experiences.map((experience) => `${experience.role}, ${experience.company} — ${experience.stack.slice(0, 3).join(", ")}`),
  },
  {
    eyebrow: "Research",
    title: "Contextual Identity Agent",
    body: research.description,
    accent: research.status,
    points: research.stats.map((stat) => `${stat.value} ${stat.label.toLowerCase()} ${stat.detail}`),
  },
  {
    eyebrow: "Projects",
    title: "Product and systems portfolio",
    body: "Aditi's projects combine full-stack development, database-backed applications, AI services, IoT concepts, and accessibility tooling.",
    accent: "Selected builds",
    points: projects.slice(0, 5).map((project) => `${project.title}: ${project.stack}`),
  },
  {
    eyebrow: "Skills",
    title: "Technical toolkit",
    body: "Comfortable moving from problem framing to implementation across programming, APIs, databases, and applied AI tooling.",
    accent: "Core strengths",
    points: skillGroups.slice(0, 6).map((group) => `${group.title}: ${group.skills.join(", ")}`),
  },
  {
    eyebrow: "Certifications",
    title: "Continuous learning",
    body: "Coursework and certifications support a portfolio spanning cloud fundamentals, analytics, AI, and digital strategy.",
    accent: "Learning record",
    points: certificates.slice(0, 6),
  },
  {
    eyebrow: "Contact",
    title: "Let's build something",
    body: "Open to research collaborations, internships, and interesting engineering problems.",
    accent: "Thank you",
    points: [profile.email, profile.phone, profile.linkedin.replace("https://www.", ""), profile.github.replace("https://", "")],
  },
];

export default function PptPage() {
  return (
    <main className="deck-shell">
      <nav className="deck-toolbar" aria-label="Deck tools">
        <Link href="/" className="deck-home-link">← Portfolio</Link>
        <Link href="/resume" className="deck-home-link">Resume</Link>
        <button type="button" className="deck-print-button" onClick={() => window.print()}>Print / Save PDF</button>
      </nav>
      <div className="deck-stack" aria-label={`${profile.name} presentation deck`}>
        {deckSlides.map((slide, index) => (
          <section className="deck-slide" key={slide.title} aria-label={`Slide ${index + 1}: ${slide.title}`}>
            <div className="deck-slide-content">
              <p className="deck-eyebrow">{slide.eyebrow}</p>
              <h1>{slide.title}</h1>
              <p className="deck-body">{slide.body}</p>
              <ul>
                {slide.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
            <aside className="deck-sidebar">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{slide.accent}</p>
            </aside>
          </section>
        ))}
      </div>
    </main>
  );
}
