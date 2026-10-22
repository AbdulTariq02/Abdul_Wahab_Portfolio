"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { ExternalLink } from "lucide-react";
import image3 from "../components/woodGalleryBillMaker.png";
import image2 from "../components/todolist.png";
import image1 from "../components/weatherapplication.png";
import image4 from "../components/tic.png";
import image5 from "../components/color.png";
import image6 from "../components/BMilater.png";
import image7 from "../components/bulb.png";
import image8 from "../components/introcard.png";
import image9 from "../components/clock.png";
import Navbar from "../components/navbar";

const projects: {
  title: string;
  description: string;
  image: StaticImageData;
  link: string;
  technologies: string[];
}[] = [
  {
    title: "Responsive Weather Forecast App",
    description: "A modern and user-friendly weather forecasting web application developed using Angular 12. It provides real-time weather updates, a 7-day forecast, and key daily highlights such as humidity, pressure, and wind speed. The app features a clean, mobile-responsive layout and leverages external APIs to deliver accurate data with smooth UI transitions — optimized for both desktop and mobile users.",
    image: image1,
    link: "https://sparkling-boba-7affc1.netlify.app/",
    technologies: ["Angular 12", "Weather API", "Responsive UI"],
  },
  {
    title: "Simple To-Do List Web App",
    description: "A minimalist to-do list application built using React and Next.js. It allows users to efficiently add, view, and delete tasks, helping them stay organized and productive. With a clean and responsive design, this app offers a smooth user experience across devices — ideal for daily task management.",
    image: image2,
    link: "https://my-app-rho-sepia.vercel.app/",
    technologies: ["React", "Next.js", "Task management"],
  },
  {
    title: "Wood Gallery Billing System",
    description: "This is a custom billing web application designed specifically for wood galleries and small businesses dealing in wooden products. It allows users to create, view, and manage bills with ease. Built using modern web technologies, the system ensures a smooth user experience with features like real-time data handling, responsive layout, and intuitive design. It streamlines the billing process, helping businesses save time and reduce manual errors.",
    image: image3,
    link: "https://wod-gallery-bill-maker.vercel.app/",
    technologies: ["Billing system", "Business tools", "Responsive UI"],
  },
  {
    title: "Interactive Tic Tac Toe Game",
    description: "A fun and interactive Tic Tac Toe game with a clean user interface. Allows two players to take turns marking X and O on a 3×3 grid. The game automatically detects a win, draw, or reset, providing a smooth and engaging gameplay experience.",
    image: image4,
    link: "https://tic-toegame-1zhefs3m1-abdul-wahabs-projects-c8c7f4b8.vercel.app/",
    technologies: ["Two-player game", "Interactive UI"],
  },
  {
    title: "Color Theme Switcher App",
    description: "A dynamic and user-friendly color theme switcher built using HTML, CSS, and JavaScript. This web application allows users to instantly change the website's color scheme by selecting from multiple predefined themes like dark, light, red, and more. It showcases clean UI transitions and real-time styling updates, making it a great example of DOM manipulation and user experience enhancement without the use of any frameworks.",
    image: image5,
    link: "https://color-themes-rouge.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "BMI Calculator Web App",
    description: "A simple and responsive Body Mass Index (BMI) calculator built using HTML, CSS, and JavaScript. Users can input their height and weight to instantly get their BMI score along with a health category (e.g., Underweight, Normal, Overweight). The app features a clean user interface and provides real-time results, making it a useful tool for quick health assessments and a strong example of interactive DOM-based form handling.",
    image: image6,
    link: "https://bmi-calculater-alpha.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Angular Bulb Toggle App",
    description: "An interactive bulb toggle web application built using Angular 12. This project allows users to turn a bulb on and off with a single button click, dynamically updating the UI based on state changes. It showcases the use of Angular's component-based architecture, property binding, and event handling — making it a clean and educational example for beginners learning Angular fundamentals in a real-world context.",
    image: image7,
    link: "https://bulb-project-phi.vercel.app/",
    technologies: ["Angular 12", "Component UI"],
  },
  {
    title: "Personal Intro Card with Social Links",
    description: "A sleek and modern personal introduction card built using HTML, CSS, and JavaScript. This UI component features a circular profile image, a welcoming headline, the developer’s name, a call-to-action \"Chat Now\" button, and social media icons. With a gradient background and centered layout, it is perfect for portfolio landing sections or as a contact widget — clean, responsive, and visually appealing.",
    image: image8,
    link: "https://my-app-nine-ruby-86.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Real-Time Digital Clock Web App",
    description: "A clean and minimal digital clock that displays the current time in hours, minutes, and seconds. The interface updates every second in real-time and stays centered on the screen, making it a perfect visual element for dashboards or landing pages. It showcases the use of JavaScript for real-time updates and CSS for styling, providing a simple yet effective example of dynamic web design.",
    image: image9,
    link: "https://my-clock-xi.vercel.app/",
    technologies: ["JavaScript", "Real-time UI"],
  },
];

export default function ProjectPage() {
  return (
    <main className="min-h-screen px-4 pb-16 pt-28 text-white sm:px-6 sm:pt-32">
      <Navbar />

      <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-sm font-semibold uppercase tracking-[0.22em] text-emerald-300"
        >
          Selected projects
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Things I&apos;ve <span className="text-emerald-300">built</span>
        </motion.h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          A selection of web apps and experiments. Open a project to explore it.
        </p>
      </header>

      <section
        aria-label="Portfolio projects"
        className="mx-auto grid max-w-7xl grid-cols-1 items-stretch gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3"
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
            className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/55 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/35 hover:shadow-emerald-950/30"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                sizes="(max-width: 639px) 100vw, (max-width: 1279px) 50vw, 33vw"
                priority={index < 3}
                className="object-cover transition duration-500 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-transparent" />
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <h2 className="text-xl font-semibold leading-snug text-white sm:text-[1.35rem]">
                {project.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-6 text-slate-300">
                {project.description}
              </p>

              <ul aria-label="Project technologies and features" className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <li
                    key={technology}
                    className="rounded-full border border-emerald-300/15 bg-emerald-300/[0.07] px-2.5 py-1 text-xs font-medium text-emerald-100"
                  >
                    {technology}
                  </li>
                ))}
              </ul>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} project`}
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-emerald-300/40 hover:bg-emerald-300/10 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
              >
                View project
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
