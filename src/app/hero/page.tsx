"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import MYImage from "../assets/image1.jpg";
import Navbar from "../components/navbar";

const Hero = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
  <main className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28 text-white sm:px-6 sm:pt-32 lg:flex lg:items-center lg:py-32">
    <Navbar />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-1/2 top-32 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl sm:h-96 sm:w-96 lg:left-[72%] lg:top-1/4"
    />

    <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.45 }}
        className="order-2 min-w-0 text-center lg:order-1 lg:text-left"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/[0.07] px-4 py-2 text-xs font-medium text-emerald-100 sm:text-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-300" aria-hidden="true" />
          Open to Freelance, Remote &amp; Full-Time Opportunities
        </span>

        <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Hello, I&apos;m
          <span className="mt-2 block bg-gradient-to-r from-white via-emerald-100 to-cyan-200 bg-clip-text text-transparent">
            Abdul Wahab Tariq
          </span>
        </h1>

        <p className="mt-4 min-h-8 text-lg font-medium text-emerald-200 sm:text-xl">
          <Typewriter
            words={["a Full-Stack Developer", "a Tech Explorer"]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1200}
          />
        </p>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 lg:mx-0">
          I&apos;m passionate about crafting clean, responsive web interfaces with
          Next.js, Angular, and TypeScript. I also work with C#, SQL Server, reporting
          tools, and collaborative development platforms to build practical web experiences.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start">
          <a
            href="/contact"
            className="inline-flex min-h-12 items-center justify-center rounded-xl bg-emerald-400 px-6 py-3 font-semibold text-slate-950 shadow-lg shadow-emerald-950/20 transition duration-200 hover:-translate-y-0.5 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Hire Me
          </a>
          <a
            href="/AbdulWahab_Resume.pdf"
            download
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3 font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-emerald-300/50 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
          >
            Download Resume
          </a>
        </div>

        <blockquote className="mx-auto mt-7 max-w-xl border-l-2 border-emerald-300/70 pl-4 text-left text-sm italic leading-6 text-slate-300 sm:text-base lg:mx-0">
          &quot;Code is not just syntax — it&apos;s creativity in motion.&quot;
        </blockquote>
        <p className="mt-5 text-sm text-slate-400">Fluent in English &amp; Urdu</p>

        <div className="mx-auto mt-6 max-w-2xl text-left lg:mx-0">
          <h2 className="text-sm font-semibold text-slate-200">What I can help with</h2>
          <ul className="mt-3 grid gap-2 text-sm text-slate-400 sm:grid-cols-2">
            {[
              "Responsive websites and web apps",
              "UI/UX fixes and performance improvements",
              "API integration and frontend state",
              "Team collaboration with Git and Agile tools",
            ].map((service) => (
              <motion.li
                key={service}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3, delay: prefersReducedMotion ? 0 : 0.06 }}
                className="flex items-start gap-2"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" aria-hidden="true" />
                <span>{service}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.5, delay: prefersReducedMotion ? 0 : 0.06 }}
        className="order-1 flex justify-center lg:order-2"
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
          className="relative w-full max-w-[19rem] sm:max-w-[23rem] lg:max-w-[27rem]"
        >
          <motion.div
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { opacity: [0.4, 0.7, 0.4], scale: [0.98, 1.03, 0.98] }}
            transition={{ duration: 4, ease: "easeInOut", repeat: Infinity }}
            className="absolute -inset-5 rounded-[2.25rem] bg-gradient-to-br from-emerald-300/30 via-cyan-300/15 to-transparent blur-2xl"
          />
          <motion.div
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { opacity: [0.35, 0.75, 0.35], scale: [1, 1.012, 1] }}
            transition={{ duration: 3.5, ease: "easeInOut", repeat: Infinity }}
            className="pointer-events-none absolute -inset-2 rounded-[2rem] border border-emerald-200/20 border-t-emerald-200/80 border-r-cyan-200/50"
          />
          <motion.span
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { y: [0, -7, 0], opacity: [0.65, 1, 0.65] }}
            transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
            className="pointer-events-none absolute -right-3 top-[18%] z-10 h-2.5 w-2.5 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,0.9)] sm:-right-4"
          />
          <motion.span
            aria-hidden="true"
            animate={prefersReducedMotion ? undefined : { y: [0, 7, 0], opacity: [0.55, 0.95, 0.55] }}
            transition={{ duration: 3.6, ease: "easeInOut", repeat: Infinity, delay: 0.4 }}
            className="pointer-events-none absolute -left-3 bottom-[20%] z-10 h-2 w-2 rounded-full bg-emerald-200 shadow-[0_0_16px_rgba(110,231,183,0.85)] sm:-left-4"
          />
          <div className="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-slate-900/70 p-2 shadow-2xl shadow-black/40">
            <Image
              src={MYImage}
              alt="Abdul Wahab Tariq"
              priority
              sizes="(max-width: 639px) 75vw, (max-width: 1023px) 55vw, 430px"
              className="aspect-[4/5] w-full rounded-[1.25rem] object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
            />
          </div>
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.35, delay: 0.25 }}
            className="absolute -bottom-5 left-1/2 w-max max-w-[calc(100%-1rem)] -translate-x-1/2 rounded-2xl border border-white/10 bg-slate-950/90 px-4 py-3 text-center shadow-xl backdrop-blur sm:left-auto sm:right-5 sm:translate-x-0"
          >
            <p className="text-sm font-semibold text-white">Web Developer</p>
            <p className="mt-0.5 text-xs text-slate-400">Karachi, Pakistan</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  </main>
  );
};

export default Hero;
