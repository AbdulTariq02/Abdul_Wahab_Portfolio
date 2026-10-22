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
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    const form = formRef.current;
    if (!form) {
      console.error("Contact form is unavailable.");
      setSubmitError("The contact form is unavailable. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form).entries())),
      });
      const result: { message?: string } = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Your message could not be sent. Please try again.");
      }

      setSubmitError(null);
      setIsSubmitted(true);
      form.reset();
    } catch (error) {
      console.error("Form submit error:", error);
      setSubmitError(error instanceof Error ? error.message : "Your message could not be sent. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main id="contact" className="min-h-screen px-4 pb-16 pt-28 text-white sm:px-6 sm:pt-32">
      <Navbar />
      <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Left Card */}
        <motion.div
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex min-w-0 flex-col gap-5 rounded-3xl border border-white/10 bg-slate-950/45 p-5 text-white shadow-[0_8px_30px_rgb(0,0,0,0.2)] backdrop-blur-md sm:gap-6 sm:p-8 lg:p-10"
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
                  href="tel:+923098434416">

                <span className="text-gray-200 hover:text-blue-400">+923098434416</span>
              </a>

            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-orange-400" size={20} />
              <a href="mailto:wahabsurfali@gmail.com">
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

          <div className="flex flex-wrap gap-3">
            <a aria-label="Facebook" href="https://www.facebook.com/profile.php?id=61552016015449" target="_blank" rel="noopener noreferrer">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105">
                <FontAwesomeIcon icon={faFacebookF} className="text-[#1877F2]" size="lg" />
              </div>
            </a>

            <a aria-label="Instagram" href="https://www.instagram.com/wahabsurfali/" target="_blank" rel="noopener noreferrer">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105">
                <FontAwesomeIcon icon={faInstagram} className="text-[#E1306C]" size="lg" />
              </div>
            </a>

            <a aria-label="Twitter" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105">
                <FontAwesomeIcon icon={faTwitter} className="text-[#1DA1F2]" size="lg" />
              </div>
            </a>

            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/wahab-tariq-533595297/" target="_blank" rel="noopener noreferrer">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-[#0077B5]" size="lg" />
              </div>
            </a>

            <a aria-label="GitHub" href="https://github.com/AbdulTariq02" target="_blank" rel="noopener noreferrer">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:scale-105">
                <FontAwesomeIcon icon={faGithub} className="text-black" size="lg" />
              </div>
            </a>
          </div>

        </motion.div>

        {/* Right Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative min-w-0 space-y-5 rounded-3xl border border-white/10 bg-slate-950/45 p-5 shadow-[0_8px_30px_rgb(0,0,0,0.2)] backdrop-blur-md sm:space-y-6 sm:p-8 lg:p-10"
          initial={{ y: 18, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div aria-hidden="true" className="absolute -left-[10000px] top-auto h-px w-px overflow-hidden">
            <label htmlFor="contact-website">Leave this field empty</label>
            <input
              id="contact-website"
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          {isSubmitted && (
            <motion.div
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center rounded-3xl border border-emerald-300/20 bg-slate-950/95 p-6 text-center backdrop-blur-xl sm:p-10"
            >
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10 shadow-[0_0_45px_rgba(110,231,183,0.18)]">
                <LottieAnimationSUbmit />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
                Message sent
              </p>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Thank you for reaching out!
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-slate-300 sm:text-base">
                I truly appreciate you taking the time to get in touch. Your message has been accepted by the email service, and I’ll get back to you as soon as I can.
              </p>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="mt-7 rounded-xl border border-emerald-300/30 bg-emerald-300/10 px-5 py-3 text-sm font-semibold text-emerald-200 transition hover:bg-emerald-300/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
              >
                Send another message
              </motion.button>
            </motion.div>
          )}

          {submitError && (
            <p role="alert" className="rounded-xl border border-red-400/30 bg-red-950/40 px-4 py-3 text-sm text-red-200">
              {submitError}
            </p>
          )}

          <input
            type="text"
            name="name"
            required
            minLength={2}
            maxLength={120}
            placeholder="Full Name"
            aria-label="Full name"
            autoComplete="name"
            className="w-full rounded-xl bg-[#1e293b] px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-300/70"
          />

          <input
            type="email"
            name="email"
            required
            maxLength={254}
            placeholder="Your Email"
            aria-label="Your email"
            autoComplete="email"
            className="w-full rounded-xl bg-[#1e293b] px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-300/70"
          />

          <input
            type="text"
            name="subject"
            required
            minLength={2}
            maxLength={160}
            placeholder="Subject"
            aria-label="Subject"
            className="w-full rounded-xl bg-[#1e293b] px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-300/70"
          />

          <textarea
            name="message"
            required
            rows={4}
            minLength={2}
            maxLength={5000}
            placeholder="Your Message"
            aria-label="Your message"
            className="w-full rounded-xl bg-[#1e293b] px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-emerald-300/70"
          ></textarea>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={isSubmitting}
            className="min-h-11 rounded-xl bg-emerald-400 px-8 py-3 font-semibold text-slate-950 transition duration-300 hover:bg-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white disabled:cursor-wait disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </main>
  );
};

export default ContactSection;
