'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import image3 from '../components/woodGalleryBillMaker.png'; // Adjust the path as necessary
import image2 from '../components/todolist.png'; // Adjust the path as necessary
import image1 from '../components/weatherapplication.png'; // Adjust the path as necessary
import image4 from '../components/tic.png'; // Adjust the path as necessary
import image5 from '../components/color.png'; // Adjust the path as necessary
import image6 from '../components/BMilater.png'; // Adjust the path as necessary
import image7 from '../components/bulb.png'; // Adjust the path as necessary
import image8 from '../components/introcard.png'; // Adjust the path as necessary
import image9 from '../components/clock.png'; // Adjust the path as necessary
import Navbar from '../components/navbar';


export default function ProjectPage() {
  const projects = [
    {
      title: "Responsive Weather Forecast App",
      description: "A modern and user-friendly weather forecasting web application developed using Angular 12. It provides real-time weather updates, a 7-day forecast, and key daily highlights such as humidity, pressure, and wind speed. The app features a clean, mobile-responsive layout and leverages external APIs to deliver accurate data with smooth UI transitions — optimized for both desktop and mobile users.",
      image: image1,
      link: "https://sparkling-boba-7affc1.netlify.app/",
    },
    {
      title: "Simple To-Do List Web App",
      description: "A minimalist to-do list application built using React and Next.js. It allows users to efficiently add, view, and delete tasks, helping them stay organized and productive. With a clean and responsive design, this app offers a smooth user experience across devices — ideal for daily task management.",
      image: image2,
      link: "https://my-app-rho-sepia.vercel.app/",
    },
    {
      title: "Wood Gallery Billing System",
      description: "This is a custom billing web application designed specifically for wood galleries and small businesses dealing in wooden products. It allows users to create, view, and manage bills with ease. Built using modern web technologies, the system ensures a smooth user experience with features like real-time data handling, responsive layout, and intuitive design. It streamlines the billing process, helping businesses save time and reduce manual errors.",
      image: image3,
      link: "https://wod-gallery-bill-maker.vercel.app/",
    },

    {
      title: "Interactive Tic Tac Toe Game",
      description: "A fun and interactive Tic Tac Toe game with a clean user interface. Allows two players to take turns marking X and O on a 3×3 grid. The game automatically detects a win, draw, or reset, providing a smooth and engaging gameplay experience.",
      image: image4,
      link: "https://wod-gallery-bill-maker.vercel.app/",
    },
    {
      title: "Color Theme Switcher App",
      description: "A dynamic and user-friendly color theme switcher built using HTML, CSS, and JavaScript. This web application allows users to instantly change the website's color scheme by selecting from multiple predefined themes like dark, light, red, and more. It showcases clean UI transitions and real-time styling updates, making it a great example of DOM manipulation and user experience enhancement without the use of any frameworks.",
      image: image5,
      link: "https://color-themes-rouge.vercel.app/",
    },
    {
      title: "BMI Calculator Web App",
      description: "A simple and responsive Body Mass Index (BMI) calculator built using HTML, CSS, and JavaScript. Users can input their height and weight to instantly get their BMI score along with a health category (e.g., Underweight, Normal, Overweight). The app features a clean user interface and provides real-time results, making it a useful tool for quick health assessments and a strong example of interactive DOM-based form handling.",
      image: image6,
      link: "https://bmi-calculater-alpha.vercel.app/",
    },
    {
      title: "Angular Bulb Toggle App",
      description: "An interactive bulb toggle web application built using Angular 12. This project allows users to turn a bulb on and off with a single button click, dynamically updating the UI based on state changes. It showcases the use of Angular's component-based architecture, property binding, and event handling — making it a clean and educational example for beginners learning Angular fundamentals in a real-world context.",
      image: image7,
      link: "https://bulb-project-phi.vercel.app/",
    },
    {
      title: "Personal Intro Card with Social Links",
      description: "A sleek and modern personal introduction card built using HTML, CSS, and JavaScript. This UI component features a circular profile image, a welcoming headline, the developer’s name, a call-to-action \"Chat Now\" button, and social media icons. With a gradient background and centered layout, it is perfect for portfolio landing sections or as a contact widget — clean, responsive, and visually appealing.",
      image: image8,
      link: "https://my-app-nine-ruby-86.vercel.app/",
    },
    {
      title: "Real-Time Digital Clock Web App",
      description: "A clean and minimal digital clock that displays the current time in hours, minutes, and seconds. The interface updates every second in real-time and stays centered on the screen, making it a perfect visual element for dashboards or landing pages. It showcases the use of JavaScript for real-time updates and CSS for styling, providing a simple yet effective example of dynamic web design.",
      image: image9,
      link: "https://my-clock-xi.vercel.app/",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4  ">
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue/50 backdrop-blur-md">
        <Navbar />
      </div>
      {/* <Image
          src={BgImage}
          alt="Background"
          fill
          className="object-cover opacity-40"
          priority
        /> */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" mywork-head text-5xl   font-extrabold text-center mt-10 mb-16 text-white "
      >
        My <span className="text-[#00bfff]">Works</span>
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, type: 'spring' }}
            className="rounded-3xl p-6 flex flex-col justify-between border border-[#00bfff] hover:border-pink-500 shadow-2xl hover:shadow-pink-500/50 transition duration-500 backdrop-blur-sm hover:scale-105"
          >
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={250}
              className="rounded-2xl object-cover mb-5 border border-gray-600"
              priority

            />
            <h2 className="text-2xl font-bold mb-3 text-white tracking-wide">{project.title}</h2>
            <p className="text-gray-300 mb-5 leading-relaxed text-sm md:text-base">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              className="inline-block text-[#00bfff] font-semibold hover:text-pink-400 transition text-sm md:text-base"
            >
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
