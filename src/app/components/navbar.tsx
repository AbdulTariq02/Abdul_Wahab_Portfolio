"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';



// import Image from 'next/image';
// import logoimg from '../components/output-onlinegiftools (2).gif'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 navbar ">
      
    
      <div className="logo text-3xl"><a href="/">Port<span>folio</span></a></div>
        <button className="hamburger" onClick={toggleMenu}>☰</button>
    
      {/* <div className="logo"><a href="/home"><Image className="img" src={logoimg} alt="iim" /></a></div> */}

      <div className={`nav-center ${menuOpen ? 'show' : ''}`}>
        <button className="close-btn" onClick={closeMenu}>❌</button>

<ul className="nav-links flex flex-col md:flex-row md:gap-10 gap-6">
  {[
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/project', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ].map(({ href, label }) => (
    <li key={href} className="group relative text-white font-bold text-xl w-fit">
      <Link href={href} onClick={closeMenu} className="relative">
        {label}
        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
      </Link>
    </li>
  ))}
</ul>



       
      </div>

      <div className="nav-right">
        <a
         download
         href="./AbdulWahab_Resume.pdf" >
          <button className="download-btn"> Download CV    <FontAwesomeIcon icon={faDownload} className="mr-2" />
</button>
        </a>
      </div>      
    </nav>
  );
};

export default Navbar;
