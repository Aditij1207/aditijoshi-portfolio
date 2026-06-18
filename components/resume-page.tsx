import type { ReactNode } from "react";
import { certificates, education, experiences, leadershipActivities, patent, profile, projects, research, skillGroups } from "@/lib/portfolio";

const coursework = ["Data Structures & Algorithms", "OOP", "Database Management", "Cryptography", "Computer Networks", "AI Retrieval Systems"];

function ResumeSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="resume-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="resume-bullets">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function ResumePage() {
  const featuredProjects = projects.slice(0, 5);

  return (
    <main className="resume-shell">
      <article className="resume-page" aria-label={`${profile.name} resume`}>
        <header className="resume-header">
          <h1>{profile.name}</h1>
          <p>{profile.location}</p>
          <div className="resume-contact-row" aria-label="Contact links">
            <span>☎ {profile.phone}</span>
            <span>✉ {profile.email}</span>
            <span>⌁ {profile.linkedin.replace("https://www.", "")}</span>
            <span>⌘ {profile.github.replace("https://", "")}</span>
            <span>◈ {profile.portfolio.replace("https://", "")}</span>
          </div>
        </header>

        <ResumeSection title="Education">
          <div className="resume-entry-heading">
            <strong>{education.school}</strong>
            <strong>{education.date.replace("—", "–")}</strong>
          </div>
          <div className="resume-entry-subheading">
            <em>{education.degree}</em>
            <em>{education.stats.map((stat) => `${stat.label}: ${stat.value}${stat.suffix ?? ""}`).join(" · ")}</em>
          </div>
          <h3>Relevant Coursework</h3>
          <ul className="resume-coursework">
            {coursework.map((course) => (
              <li key={course}>{course}</li>
            ))}
          </ul>
        </ResumeSection>

        <ResumeSection title="Experience">
          {experiences.map((experience) => (
            <div className="resume-entry" key={experience.company}>
              <div className="resume-entry-heading">
                <strong>{experience.company}</strong>
                <strong>{experience.date}</strong>
              </div>
              <div className="resume-entry-subheading">
                <em>{experience.role}</em>
                <em>{experience.location}</em>
              </div>
              <BulletList items={experience.bullets} />
            </div>
          ))}
        </ResumeSection>

        <ResumeSection title="Research">
          <div className="resume-entry-heading">
            <strong>{research.title}</strong>
            <strong>{research.status}</strong>
          </div>
          <div className="resume-entry-subheading">
            <em>{research.authors}</em>
            <em>{research.affiliation}</em>
          </div>
          <BulletList
            items={[
              "Developed a privacy-preserving identity framework using contextual agents, selective disclosure credentials, and zero-knowledge proofs.",
              "Evaluated the system on 7,500 simulated interactions.",
              "Achieved 68% disclosure minimization, 61% lower re-identification risk, and 91% classification accuracy.",
            ]}
          />
        </ResumeSection>

        <ResumeSection title="Projects">
          {featuredProjects.map((project) => (
            <div className="resume-entry compact" key={project.title}>
              <div className="resume-entry-heading">
                <strong>{project.title}</strong>
                <strong>{project.status ?? project.stack.split(",")[0]}</strong>
              </div>
              <div className="resume-entry-subheading">
                <em>{project.stack}</em>
              </div>
              <BulletList items={[project.description]} />
            </div>
          ))}
        </ResumeSection>

        <ResumeSection title="Patent">
          <div className="resume-entry-heading">
            <strong>{patent.title}</strong>
            <strong>{patent.status}</strong>
          </div>
          <BulletList items={[patent.description]} />
        </ResumeSection>

        <ResumeSection title="Technical Skills">
          <p className="resume-skills">
            {skillGroups.map((group) => (
              <span key={group.title}>
                <strong>{group.title}:</strong> {group.skills.join(", ")}
              </span>
            ))}
          </p>
        </ResumeSection>

        <ResumeSection title="Leadership / Certifications">
          <div className="resume-entry-heading">
            <strong>Certifications</strong>
            <strong>Recent</strong>
          </div>
          <p className="resume-skills">{certificates.join("; ")}</p>
          <div className="resume-entry-heading leadership-heading">
            <strong>Leadership</strong>
            <strong>2025 – Present</strong>
          </div>
          <BulletList items={leadershipActivities.flatMap((activity) => activity.bullets.map((bullet) => `${activity.title} — ${bullet}`))} />
        </ResumeSection>
      </article>
    </main>
  );
}
