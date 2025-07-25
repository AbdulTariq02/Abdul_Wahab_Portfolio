"use client";

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 navbar px-4 md:px-16">

      {/* Mobile top bar */}
     <div className="flex items-center justify-between w-full md:hidden md:gap-10">
  <div className="logo text-3xl"><a href="/">Port<span>folio</span></a></div>
  <button className="hamburger md:hidden" onClick={toggleMenu}>☰</button>
</div>


      {/* Main nav center */}
      <div className={`nav-center ${menuOpen ? 'show' : ''} md:flex md:items-center md:justify-between`}>
        
        {/* Close Button (Mobile) */}
        <button className="close-btn md:hidden text-2xl text-red-500 mb-2" onClick={closeMenu}>❌</button>

        {/* Logo (desktop) */}
        <div className="logo hidden md:block text-3xl">
          <a href="/">Port<span>folio</span></a>
        </div>

        {/* Nav links */}
        <ul className="nav-links flex flex-col md:flex-row md:gap-10 gap-6 items-center">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/project', label: 'Projects' },
            { href: '/contact', label: 'Contact' },
          ].map(({ href, label }) => {
            const isActive = pathname === href;

            return (
              <li key={href} className="group relative text-white font-bold text-lg w-fit">
                <Link href={href} onClick={closeMenu} className="relative">
                  {label}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] transition-all duration-300 hidden md:block ${
                      isActive ? 'w-full bg-green-400' : 'w-0 group-hover:w-full bg-green-400'
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* CV Download Button (only Desktop) */}
        <div className="nav-right hidden md:block mt-4 md:mt-0">
          <a href="./AbdulWahab_Resume.pdf" download>
            <button className="download-btn">
              Download CV <FontAwesomeIcon icon={faDownload} className="ml-2" />
            </button>
          </a>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
