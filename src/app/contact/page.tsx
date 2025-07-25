'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import LottieAnimations from '../components/contactmeimage';
import { useRef, useState } from "react";
import LottieAnimationSUbmit from "../components/formsubmit";
import Navbar from "../components/navbar";

const ContactSection = () => {
  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const form = formRef.current as unknown as HTMLFormElement;
    const formData = new FormData(form);

    try {
      await fetch("https://formsubmit.co/ajax/wahabsurfali@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      setIsSubmitted(true);
      form.reset(); // Reset the form fields
      setTimeout(() => setIsSubmitted(false), 4000); // Hide success after 3s
    } catch (error) {
      console.error("Form submit error:", error);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 text-white mt-12">
      <div className="fixed top-0 left-0 right-0 z-50 bg-blue/50 backdrop-blur-md">
        <Navbar />
      </div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Left Card */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-md p-10 rounded-3xl text-white flex flex-col gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.2)]"
        >
          <div className="max-w-[250px] mx-auto">
            <LottieAnimations />
          </div>

          <h2 className="text-3xl font-bold text-center text-cyan-300">Contact Us</h2>
          <p className="text-center text-sm text-gray-300 leading-relaxed">
            We’d love to hear from you. Fill out the form and we’ll be in touch soon.
          </p>

          <div className="space-y-4 mt-4 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="text-orange-400" size={20} />
              <a
                href="tel:+923212147164"
                target="_blank">

                <span className="text-gray-200 hover:text-blue-400">+923212147164</span>
              </a>

            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-orange-400" size={20} />
              <a href="mailto:wahabsurfali@email.com"
                target="_blank"
              >
                <span className="text-gray-200 hover:text-blue-400">wahabsurfali@gmail.com</span>

              </a>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-orange-400" size={20} />
              <a
                href="https://www.google.com/maps/place/Karachi,+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-gray-200 hover:text-blue-400">Karachi, Pakistan</span>
              </a>

            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61552016015449" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
                <FontAwesomeIcon icon={faFacebookF} className="text-[#1877F2]" size="lg" />
              </div>
            </a>

            <a href="https://www.instagram.com/wahabsurfali/" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
                <FontAwesomeIcon icon={faInstagram} className="text-[#E1306C]" size="lg" />
              </div>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
                <FontAwesomeIcon icon={faTwitter} className="text-[#1DA1F2]" size="lg" />
              </div>
            </a>

            <a href="https://www.linkedin.com/in/wahab-tariq-533595297/" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-[#0077B5]" size="lg" />
              </div>
            </a>

            <a href="https://github.com/AbdulTariq02" target="_blank" rel="noopener noreferrer">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white shadow-md">
                <FontAwesomeIcon icon={faGithub} className="text-black" size="lg" />
              </div>
            </a>
          </div>

        </motion.div>

        {/* Right Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white/5 backdrop-blur-md p-10 rounded-3xl space-y-6 shadow-[0_8px_30px_rgb(0,0,0,0.2)] relative"
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          {isSubmitted && (
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center rounded-3xl z-20">
              <p className="text-green-400 mt-4 text-lg font-medium">Message Sent Successfully!</p>
              <LottieAnimationSUbmit />
            </div>

          )}

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="firstName"
              required
              placeholder="First Name"
              className="w-full bg-[#1e293b] text-white placeholder-gray-400 px-4 py-3 rounded-xl outline-none"
            />
            <input
              type="text"
              name="lastName"
              required
              placeholder="Last Name"
              className="w-full bg-[#1e293b] text-white placeholder-gray-400 px-4 py-3 rounded-xl outline-none"
            />
          </div>

          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full bg-[#1e293b] text-white placeholder-gray-400 px-4 py-3 rounded-xl outline-none"
          />

          <textarea
            name="message"
            required
            rows={4}
            placeholder="Your Message"
            className="w-full bg-[#1e293b] text-white placeholder-gray-400 px-4 py-3 rounded-xl outline-none"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 transition duration-300 text-white font-semibold py-3 px-8 rounded-xl"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
