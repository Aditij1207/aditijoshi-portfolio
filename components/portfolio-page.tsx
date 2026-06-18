"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { BadgeIcon, ExternalIcon, GithubIcon, LinkedinIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { certificates, education, experiences, featuredAchievements, leadershipActivities, navItems, patent, profile, projects, research, skillGroups } from "@/lib/portfolio";

type SectionKickerProps = {
  label: string;
  icon?: string;
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

function SectionKicker({ label, icon }: SectionKickerProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-100 to-rose-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.22em] text-violet-700">
      <span aria-hidden="true">{icon}</span>
      {label}
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return <span className="soft-chip rounded-full px-3 py-1 text-sm font-medium shadow-sm shadow-purple-900/0">{children}</span>;
}

function SectionShell({ id, kicker, icon, title, children }: { id: string; kicker: string; icon?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="section-divider mx-auto max-w-[1500px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.55, ease: "easeOut" }}>
        <SectionKicker label={kicker} icon={icon} />
        {title ? (
          <h2 className="serif mt-10 text-5xl font-bold leading-tight tracking-[-0.04em] text-[#151426] sm:text-6xl">{title}</h2>
        ) : null}
        <div className={title ? "mt-12" : "mt-12"}>{children}</div>
      </motion.div>
    </section>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#ded8ec] bg-[#fff9f0]/92 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[1500px] flex-col gap-3 px-5 py-4 sm:px-8 md:h-[84px] md:flex-row md:items-center md:justify-between md:gap-6 md:py-0 lg:px-12" aria-label="Primary navigation">
        <a href="#home" className="serif shrink-0 text-2xl font-bold tracking-[-0.04em] text-[#171628]">
          Aditi <span className="text-[#6b6d91]">Joshi</span>
        </a>
        <div className="flex items-center gap-5 overflow-x-auto pb-1 text-base font-medium text-[#626381] [scrollbar-width:none] sm:gap-7 md:gap-8 md:pb-0 md:text-lg">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="shrink-0 transition hover:text-violet-700">
              {item}
            </a>
          ))}
          <a href="/ppt" className="shrink-0 transition hover:text-violet-700">PPT</a>
          <a href="/resume" className="shrink-0 transition hover:text-violet-700">Resume</a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="mx-auto flex min-h-[calc(100svh-84px)] max-w-[1500px] items-center px-5 py-20 sm:px-8 lg:px-12">
      <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ duration: 0.75, ease: "easeOut" }} className="max-w-[760px]">
        <p className="mb-12 text-base font-bold uppercase tracking-[0.24em] text-violet-700 sm:text-lg">{profile.subtitle}</p>
        <h1 className="serif gradient-name text-7xl font-bold leading-[0.95] tracking-[-0.06em] sm:text-8xl lg:text-[112px]">
          {profile.name.split(" ").slice(0, 2).join(" ")}
          <br />
          <span>{profile.name.split(" ").slice(2).join(" ")}.</span>
        </h1>
        <p className="mt-12 max-w-[760px] text-2xl font-medium leading-[1.55] text-[#53536a] sm:text-[28px]">{profile.description}</p>
        <div className="mt-14 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
          <a href={`mailto:${profile.email}`} className="gradient-button inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-lg font-bold text-white shadow-xl shadow-rose-900/15 transition hover:-translate-y-0.5">
            <MailIcon className="h-5 w-5" />
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-[#ded8ec] bg-white/80 px-7 py-4 text-lg font-bold text-[#171628] shadow-lg shadow-purple-950/5 transition hover:-translate-y-0.5 hover:border-violet-300">
            <GithubIcon className="h-5 w-5" />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-[#ded8ec] bg-white/80 px-7 py-4 text-lg font-bold text-[#171628] shadow-lg shadow-purple-950/5 transition hover:-translate-y-0.5 hover:border-violet-300">
            <LinkedinIcon className="h-5 w-5" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

function About() {
  return (
    <SectionShell id="about" kicker="About" icon="⌘" title="About & Education">
      <div className="grid gap-14 lg:grid-cols-[1fr_0.52fr] lg:items-start">
        <div className="glass-card rounded-[28px] p-7 sm:p-9 lg:p-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#151426]">{education.school}</h3>
              <p className="mt-3 text-xl font-medium text-[#696a89]">{education.degree}</p>
            </div>
            <p className="text-lg font-medium text-[#696a89]">{education.date}</p>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {education.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#696a89]">{stat.label}</p>
                <p className="serif mt-3 text-5xl font-bold text-[#9a4bd7]">
                  {stat.value} <span className="font-sans text-lg text-[#696a89]">{stat.suffix}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="serif mb-10 text-5xl font-bold tracking-[-0.04em] sm:text-6xl">Skills</h2>
          <div className="space-y-6">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.26em] text-[#696a89]">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <Chip key={skill}>{skill}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function FeaturedAchievements() {
  return (
    <SectionShell id="achievements" kicker="Featured Achievements" icon="✦" title="Credibility snapshot">
      <div className="glass-card warm-card rounded-[28px] p-7 ring-2 ring-violet-200 sm:p-10 lg:p-12">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredAchievements.map((achievement) => (
            <div key={achievement} className="rounded-3xl border border-[#ded8ec] bg-white/70 p-5 text-lg font-bold leading-relaxed text-[#151426] shadow-sm shadow-purple-950/5">
              <span className="mr-3 text-violet-600">✣</span>{achievement}
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}

function Leadership() {
  return (
    <SectionShell id="leadership" kicker="Leadership & Activities" icon="✧" title="Campus leadership and impact">
      <div className="grid gap-8 lg:grid-cols-3">
        {leadershipActivities.map((activity) => (
          <article key={activity.title} className="glass-card rounded-[26px] p-7 sm:p-9">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-violet-700">{activity.role}</p>
            <h3 className="mt-4 text-2xl font-bold text-[#151426]">{activity.title}</h3>
            <ul className="mt-7 space-y-4 text-lg font-medium leading-relaxed text-[#696a89]">
              {activity.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-4"><span className="text-violet-600">·</span><span>{bullet}</span></li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function Experience() {
  return (
    <SectionShell id="experience" kicker="Experience" icon="▣" title="Where I've worked">
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.article key={experience.company} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="glass-card relative overflow-hidden rounded-[28px] p-7 sm:p-10 lg:p-12">
            {index === 0 && <div className="absolute left-0 top-8 h-[74%] w-1 rounded-r-full bg-gradient-to-b from-violet-600 to-rose-400" />}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-[#151426]">
                  {experience.role} <span className="text-[#696a89]">· {experience.company}</span>
                </h3>
                <p className="mt-3 text-lg font-medium text-[#696a89]">⌾ {experience.location}</p>
              </div>
              <p className="rounded-full bg-[#f2defc] px-8 py-5 text-lg font-medium text-[#696a89]">{experience.date}</p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {experience.stack.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </div>
            <ul className="mt-8 space-y-6 text-xl font-medium leading-relaxed text-[#696a89]">
              {experience.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-5"><span className="text-violet-600">·</span><span>{bullet}</span></li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}

function Research() {
  return (
    <SectionShell id="research" kicker="Research" icon="□" title="Research">
      <article className="glass-card warm-card rounded-[28px] p-7 sm:p-10 lg:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.26em] text-[#696a89]">✣ {research.status}</p>
        <h3 className="serif mt-6 max-w-[1200px] text-4xl font-bold leading-tight tracking-[-0.04em] text-[#151426] lg:text-5xl">{research.title}</h3>
        <p className="mt-5 text-lg font-semibold text-[#696a89]">{research.affiliation}</p>
        <p className="mt-10 text-xl font-medium leading-relaxed text-[#696a89] lg:text-2xl">{research.description}</p>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {research.stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#696a89]">{stat.label}</p>
              <p className="serif mt-3 text-5xl font-bold text-[#9a4bd7]">{stat.value} <span className="font-sans text-base font-bold text-[#696a89]">{stat.detail}</span></p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {research.tags.map((tag) => <span key={tag} className="rounded-full border border-[#ded8ec] bg-white/70 px-4 py-2 text-base font-semibold">{tag}</span>)}
        </div>
      </article>
    </SectionShell>
  );
}

function Projects() {
  const [featured, ...rest] = projects;
  return (
    <SectionShell id="projects" kicker="Projects" icon="▧" title="Things I've built">
      {featured && (
        <article className="glass-card warm-card mb-8 rounded-[28px] p-7 ring-2 ring-violet-200 sm:p-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-2xl font-bold text-[#151426]">{featured.title} <ExternalIcon className="inline h-5 w-5 text-[#696a89]" /></h3>
              <p className="mt-3 text-base font-bold text-[#696a89]">{featured.stack}</p>
            </div>
            <span className="gradient-button inline-flex w-fit rounded-full px-4 py-2 text-sm font-bold text-white shadow-xl shadow-rose-900/15">✣ Featured Project</span>
          </div>
          <p className="mt-8 text-xl font-medium text-[#696a89]">{featured.description}</p>
          {featured.status && <span className="mt-8 inline-flex rounded-full bg-[#f2defc] px-4 py-2 text-sm font-semibold">✣ {featured.status}</span>}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            {featured.href && <a href={featured.href} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#ded8ec] bg-white/80 px-5 py-3 text-base font-bold text-[#171628] transition hover:-translate-y-0.5 hover:border-violet-300"><GithubIcon className="h-5 w-5" />GitHub</a>}
            {featured.demo && <a href={featured.demo} target="_blank" rel="noreferrer" className="gradient-button inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-bold text-white shadow-xl shadow-rose-900/15 transition hover:-translate-y-0.5"><ExternalIcon className="h-5 w-5" />Live Demo</a>}
          </div>
        </article>
      )}
      <div className="grid gap-8 md:grid-cols-2">
        {rest.map((project) => (
          <article key={project.title} className="glass-card rounded-[26px] p-7 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-950/10 sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold leading-tight text-[#151426]">{project.title}</h3>
              {project.href && <a href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.title} repository`}><ExternalIcon className="h-6 w-6 text-[#696a89]" /></a>}
            </div>
            <p className="mt-3 text-base font-bold text-[#696a89]">{project.stack}</p>
            <p className="mt-7 text-xl font-medium leading-relaxed text-[#696a89]">{project.description}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function Patent() {
  return (
    <SectionShell id="patent" kicker="Patent" icon="◇" title="Filed innovation">
      <article className="glass-card warm-card rounded-[28px] p-7 sm:p-10 lg:p-12">
        <p className="text-sm font-bold uppercase tracking-[0.26em] text-[#696a89]">{patent.status}</p>
        <h3 className="serif mt-6 text-4xl font-bold leading-tight tracking-[-0.04em] text-[#151426] lg:text-5xl">{patent.title}</h3>
        <p className="mt-8 max-w-[1000px] text-xl font-medium leading-relaxed text-[#696a89] lg:text-2xl">{patent.description}</p>
      </article>
    </SectionShell>
  );
}

function Certificates() {
  return (
    <SectionShell id="certificates" kicker="Certificates" icon="♙" title="Certifications">
      <div className="glass-card overflow-hidden rounded-[28px]">
        {certificates.map((certificate, index) => (
          <div key={certificate} className={`flex items-center gap-6 border-[#ded8ec] px-7 py-7 sm:px-9 ${index < certificates.length - 1 ? "border-b" : ""} ${index === 1 ? "bg-gradient-to-r from-orange-100/55 to-transparent" : ""}`}>
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gradient-to-br from-purple-100 to-rose-100 text-[#696a89]"><BadgeIcon className="h-6 w-6" /></span>
            <h3 className="text-xl font-bold text-[#151426] sm:text-2xl">{certificate}</h3>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}

function Contact() {
  return (
    <SectionShell id="contact" kicker="Get in Touch" icon="✉" title="">
      <div className="glass-card warm-card rounded-[28px] p-8 text-center ring-2 ring-violet-200 sm:p-12 lg:p-16">
        <h2 className="serif text-5xl font-bold tracking-[-0.05em] sm:text-6xl lg:text-7xl">Let&apos;s build something.</h2>
        <p className="mx-auto mt-7 max-w-[650px] text-xl font-medium leading-relaxed text-[#696a89]">Open to research collaborations, internships, and interesting engineering problems.</p>
        <div className="mt-10 flex flex-col items-center justify-center gap-5 text-lg font-semibold text-[#696a89] lg:flex-row">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-3 hover:text-violet-700"><MailIcon className="h-5 w-5" />{profile.email}</a>
          <a href={`tel:${profile.phone.replaceAll(" ", "")}`} className="inline-flex items-center gap-3 hover:text-violet-700"><PhoneIcon className="h-5 w-5" />{profile.phone}</a>
          <span className="inline-flex items-center gap-3"><PinIcon className="h-5 w-5" />{profile.location}</span>
        </div>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <a href={profile.github} target="_blank" rel="noreferrer" className="gradient-button inline-flex items-center justify-center gap-3 rounded-full px-8 py-4 text-lg font-bold text-white shadow-xl shadow-rose-900/15"><GithubIcon className="h-5 w-5" />GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#0177c9] px-8 py-4 text-lg font-bold text-white shadow-xl shadow-blue-900/15"><LinkedinIcon className="h-5 w-5" />LinkedIn</a>
          <a href={profile.portfolio} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 rounded-full border border-[#ded8ec] bg-white/80 px-8 py-4 text-lg font-bold text-[#171628] shadow-xl shadow-purple-950/5"><ExternalIcon className="h-5 w-5" />Portfolio</a>
        </div>
      </div>
    </SectionShell>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#ded8ec] py-8">
      <div className="mx-auto flex max-w-[1500px] flex-col gap-4 px-5 text-base font-semibold text-[#696a89] sm:flex-row sm:justify-between sm:px-8 lg:px-12">
        <p>© 2026 Aditi Shailesh Joshi</p>
        <p>Designed &amp; built with care.</p>
      </div>
    </footer>
  );
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <FeaturedAchievements />
        <Experience />
        <Leadership />
        <Research />
        <Projects />
        <Patent />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
