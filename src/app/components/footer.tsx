"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Image1 from "../components/myImage.jpg";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/AbdulTariq02", icon: faGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/wahab-tariq-533595297/", icon: faLinkedinIn },
  { label: "Twitter", href: "https://twitter.com", icon: faTwitter },
  { label: "Instagram", href: "https://www.instagram.com/wahabsurfali/", icon: faInstagram },
];

export default function Footer() {
  return (
    <footer className="mx-auto mt-8 w-full max-w-7xl border-t border-white/10 px-4 py-8 text-slate-300 sm:px-6 sm:py-10">
      <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
        <div className="flex min-w-0 items-center gap-3">
          <Image
            src={Image1}
            alt="Abdul Wahab"
            sizes="48px"
            className="h-12 w-12 shrink-0 rounded-full border border-white/15 object-cover shadow-md"
          />
          <div className="min-w-0">
            <h2 className="font-semibold text-white">Abdul wahab</h2>
            <p className="text-xs leading-5 text-slate-400 sm:text-sm">
              Crafting modern, responsive and user-focused interfaces
            </p>
          </div>
        </div>

        <nav aria-label="Social media" className="flex items-center gap-3">
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              aria-label={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:-translate-y-0.5 hover:border-emerald-300/30 hover:text-emerald-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300"
            >
              <FontAwesomeIcon icon={icon} size="lg" />
            </a>
          ))}
        </nav>
      </div>

      <div className="mt-7 text-center text-xs leading-5 text-slate-400 sm:text-sm">
        <p>Let’s collaborate and bring your ideas to life 💡</p>
        <p className="mt-1">&copy; {new Date().getFullYear()} AbdulWahab. All rights reserved.</p>
      </div>
    </footer>
  );
}
