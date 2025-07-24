"use client";

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import Image from "next/image";
import MYImage from "../components/picforme.jpg";
import Navbar from "../components/navbar";

const Hero = () => {
  return (
    <div>
      <section className="pt-24 pb-12 px-4 md:px-8 lg:px-16 w-full min-h-screen  text-white relative overflow-hidden">
        {/* Sticky Navbar */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-blue/50 backdrop-blur-md">
          <Navbar />
        </div>

        <div className="z-10 flex flex-col-reverse lg:flex-row justify-between items-center w-full max-w-7xl mx-auto gap-12">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              I am <br />
              <span className="text-yellow-400 text-2xl sm:text-3xl md:text-4xl font-mono">
                <Typewriter
                  words={["AbdulWahab", "a Frontend Developer", "a Tech Explorer"]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={40}
                  delaySpeed={1000}
                />
              </span>
            </h1>

            {/* Status */}
            <span className="inline-flex items-center gap-2 text-green-400 text-sm mt-3 bg-green-900/10 px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-all duration-300 cursor-pointer">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Open to Freelance, Remote & Full-Time Opportunities
            </span>

            {/* About Text */}
            <p className="text-white font-medium max-w-md mx-auto lg:mx-0">
              I'm passionate about crafting clean, responsive web interfaces using
              Next.js, Angular, TypeScript, and modern design tools. I enjoy building
              interactive user experiences and exploring the latest in web technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-800 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all hover:brightness-125"
              >
                Hire Me
              </motion.a>

              <motion.a
              download
                href="./AbdulWahab_Resume.pdf"
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all hover:brightness-125"
              >
                Download Resume
              </motion.a>
            </div>

            {/* Quote */}
            <p className="italic border-l-4 border-yellow-400 pl-4 max-w-md mt-6 mx-auto lg:mx-0 bg-yellow-900/10 hover:border-yellow-300 text-yellow-100 rounded-md shadow-sm transition-all duration-300">
              "Code is not just syntax — it's creativity in motion."
            </p>

            {/* Language */}
            <p className="text-blue-100 text-sm">🗣️ Fluent in English & Urdu</p>

            {/* Skills List */}
            <div className="bg-gray-900/80 p-5 rounded-xl shadow-md text-sm text-blue-100 max-w-lg mt-4 mx-auto lg:mx-0">
              <h3 className="text-yellow-400 font-semibold mb-2">
                What I Can Do for You:
              </h3>
              <ul className="list-disc pl-5 space-y-1 text-white text-left">
                <li className="font-semibold">Build responsive & dynamic websites using Angular/Next.js</li>
                <li className="font-semibold">Fix UI/UX issues and improve performance</li>
                <li className="font-semibold">Integrate APIs and manage frontend state</li>
                <li className="font-semibold">Collaborate with teams via Git & Agile tools</li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center"
          >
            <div className="animated-border p-1 rounded-[40px] md:mb-40">
              <Image
                src={MYImage}
                alt="about-me"
                className="rounded-[40px] shadow-2xl object-cover w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 transition duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
