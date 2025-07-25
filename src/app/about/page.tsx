'use client';

import React from 'react';
// import Image from 'next/image';
import { motion } from 'framer-motion';
// import pic from '../components/wahab.png (3) copy.png';
import LottieAnimation from '../components/lottieabout';
import Navbar from '../components/navbar';

const About = () => {
  const skills = [
    { skill: 'HTML', level: 95 },
    { skill: 'CSS', level: 90 },
    { skill: 'JavaScript', level: 80 },
    { skill: 'TypeScript', level: 70 },
    { skill: 'Next.js', level: 70 },
    { skill: 'Angular 12', level: 50 },
  ];

  return (
    <section className="relative min-h-screen  text-gray-100 overflow-hidden mt-12 sm:mt-26">
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue/50 backdrop-blur-md">
        <Navbar />
      </div>

      {/* ✅ Foreground Content */}
      <div className="relative z-10 py-20 px-5 container mx-auto flex flex-col md:flex-row items-center gap-10">


        <LottieAnimation />



        {/* Text Content */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 w-full"
        >
          <h2 className="text-4xl font-extrabold mb-2">
            <span className="text-white">About </span>
            <motion.span
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sky-400"
            >
              Me
            </motion.span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '40%' }}
            transition={{ duration: 1 }}
            className="h-1 bg-pink-500 rounded-full mb-4"
          ></motion.div>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-5">
            I&apos;m Abdul wahab Tariq, an 18-year-old web developer from Karachi, Pakistan.
            I specialize in front-end technologies like HTML, CSS, JavaScript, TypeScript, React, Next.js, and Angular 12.
          </p>

          <p className="text-sm text-slate-400 italic mb-8">
            &quot;Turning ideas into interactive digital experiences — one line of code at a time.&quot;
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <motion.a href="/project" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <button className="bg-gradient-to-r from-pink-600 to-rose-500 hover:from-pink-700 hover:to-rose-600 text-white font-bold py-3 px-6 rounded-xl shadow-md">
                My Works
              </button>
            </motion.a>

            <motion.a href="/contact" whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-md">
                Contact Me
              </button>
            </motion.a>
          </div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-cyan-300 mb-6 border-b border-cyan-400 inline-block pb-1 animate-fadeIn mt-20"
          >
            My Skills
          </motion.h3>

          <div className="flex flex-wrap gap-3">
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-md">HTML</span>
            <span className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-md">CSS</span>
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-md">JavaScript</span>
            <span className="bg-gradient-to-r from-purple-500 to-fuchsia-600 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-md">TypeScript</span>
            <span className="bg-gradient-to-r from-green-500 to-emerald-600 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-md">Next.js</span>
            <span className="bg-gradient-to-r from-red-500 to-orange-500 px-4 py-2 rounded-full text-white text-sm font-semibold shadow-md">Angular 12</span>
          </div>



        </motion.div>
      </div>

      {/* Skill Level Bars */}
      <div className="relative z-10 mt-16 max-w-4xl mx-auto px-5">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-sky-400 mb-10 text-center tracking-wide"
        >
          Skill Proficiency Overview
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map(({ skill, level }) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800 rounded-xl p-4 shadow-lg hover:shadow-cyan-500/50 transition-all duration-500"
            >
              <div className="flex justify-between mb-2">
                <span className="text-white font-semibold text-lg">{skill}</span>
                <span className="text-cyan-300 font-medium">{level}%</span>
              </div>
              <div className="relative w-full h-4 bg-gray-600 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${level}%` }}
                  transition={{ duration: 1.5 }}
                  className="absolute h-full bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 rounded-full shadow-inner"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
