"use client";

import { motion } from "framer-motion";
import {
  SiAngular,
  SiCss3,
  SiDevexpress,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Database, FileBarChart2, GitBranch, MonitorCog } from "lucide-react";
import LottieAnimation from "../components/lottieabout";
import Navbar from "../components/navbar";

type Skill = {
  name: string;
  icon?: IconType;
  mark?: string;
  className: string;
};

const skillGroups: {
  title: string;
  description: string;
  icon: IconType | typeof Database;
  skills: Skill[];
}[] = [
  {
    title: "Frontend Development",
    description: "Responsive interfaces and interactive web experiences.",
    icon: MonitorCog,
    skills: [
      { name: "HTML", icon: SiHtml5, className: "text-orange-300" },
      { name: "CSS", icon: SiCss3, className: "text-blue-300" },
      { name: "JavaScript", icon: SiJavascript, className: "text-yellow-300" },
      { name: "TypeScript", icon: SiTypescript, className: "text-sky-300" },
      { name: "React", icon: SiReact, className: "text-cyan-300" },
      { name: "Next.js", icon: SiNextdotjs, className: "text-white" },
      { name: "Angular", icon: SiAngular, className: "text-red-300" },
    ],
  },
  {
    title: "Backend & Databases",
    description: "Working with C# and SQL Server.",
    icon: Database,
    skills: [
      { name: "C#", mark: "C#", className: "text-violet-300" },
      { name: "SQL Server", mark: "SQL", className: "text-sky-300" },
    ],
  },
  {
    title: "Reporting & Enterprise UI",
    description: "Reporting tools and enterprise interface components.",
    icon: FileBarChart2,
    skills: [
      { name: "DevExpress", icon: SiDevexpress, className: "text-orange-300" },
      { name: "Crystal Reports", mark: "CR", className: "text-cyan-200" },
    ],
  },
  {
    title: "Development & Collaboration",
    description: "Tools for debugging, version control, and deployment.",
    icon: GitBranch,
    skills: [
      { name: "Fiddler", mark: "F", className: "text-violet-300" },
      { name: "Git", icon: SiGit, className: "text-orange-300" },
      { name: "GitHub", icon: SiGithub, className: "text-white" },
      { name: "GitLab", icon: SiGitlab, className: "text-orange-300" },
      { name: "Vercel", icon: SiVercel, className: "text-white" },
    ],
  },
];

const About = () => {
  return (
    <main className="min-h-screen px-4 pb-16 pt-28 text-slate-100 sm:px-6 sm:pt-32">
    <Navbar />

    <section className="mx-auto grid max-w-7xl items-center gap-10 rounded-3xl border border-white/10 bg-slate-950/40 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="mx-auto w-full max-w-sm"
      >
        <div className="overflow-hidden rounded-3xl border border-emerald-300/20 bg-gradient-to-br from-emerald-400/10 to-cyan-400/10 p-2">
          <LottieAnimation />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.08 }}
      >
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
          A little about me
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          About <span className="text-emerald-300">Me</span>
        </h1>
        <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300" />
        <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
          I&apos;m Abdul wahab Tariq, an 18-year-old web developer from Karachi, Pakistan.
          I specialize in front-end technologies like HTML, CSS, JavaScript, TypeScript,
          React, Next.js, and Angular 12.
        </p>
        <p className="mt-4 text-sm italic leading-7 text-slate-400 sm:text-base">
          &quot;Turning ideas into interactive digital experiences — one line of code at a time.&quot;
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="/project"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-emerald-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Explore my work
          </a>
          <a
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            Get in touch
          </a>
        </div>
      </motion.div>
    </section>

    <section
      aria-labelledby="skills-title"
      className="mx-auto mt-20 max-w-7xl scroll-mt-28"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45 }}
        className="mb-9 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300">
          Tools of the trade
        </p>
        <h2 id="skills-title" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Technical <span className="text-emerald-300">Skills</span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          Technologies and tools I work with across development, reporting, and collaboration.
        </p>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map(({ title, description, icon: GroupIcon, skills }, groupIndex) => (
          <motion.article
            key={title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, delay: groupIndex * 0.06 }}
            className="rounded-2xl border border-white/10 bg-slate-950/45 p-5 shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/30 hover:bg-slate-900/65 sm:p-6"
          >
            <div className="flex items-start gap-3">
              <span className="rounded-xl border border-emerald-300/20 bg-emerald-300/10 p-2.5 text-emerald-200">
                <GroupIcon size={20} aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-5 text-slate-400">{description}</p>
              </div>
            </div>

            <ul className="mt-5 flex flex-wrap gap-2.5">
              {skills.map(({ name, icon: SkillIcon, mark, className }) => (
                <li
                  key={name}
                  title={name}
                  className="inline-flex min-h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-300/30 hover:bg-white/[0.08]"
                >
                  {SkillIcon ? (
                    <SkillIcon className={`h-4 w-4 ${className}`} aria-hidden="true" />
                  ) : (
                    <span
                      aria-hidden="true"
                      className={`inline-flex h-5 min-w-5 items-center justify-center rounded bg-white/10 px-1 text-[10px] font-bold ${className}`}
                    >
                      {mark}
                    </span>
                  )}
                  {name}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>

    </section>
  </main>
  );
};

export default About;
