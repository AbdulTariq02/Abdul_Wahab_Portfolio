"use client";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

  faInstagram,
  faTwitter,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Image1 from "../components/myImage.jpg";

export default function Footer() {
  return (
    <footer className=" mt-20 w-full py-10 px-6 text-gray-300 flex flex-col items-center md:items-start md:px-20 lg:px-40 max-w-screen-2xl mx-auto">

      <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-start gap-6">

        <div className="flex items-center gap-3 text-center md:text-left">
          <Image
            src={Image1}
            alt="Profile Image"
            className="w-12 h-12 rounded-full object-cover shadow-md"
            priority

          />
          <div>
            <h2 className="text-2xl font-semibold">Abdul wahab</h2>
            <p className="text-sm text-gray-300">
              Crafting modern, responsive and user-focused interfaces
            </p>
          </div>
        </div>



        {/* Right Side: Social Icons and Image */}
        <div className="flex items-center gap-6">
          <div className="flex gap-4 text-xl">
            <a href="https://github.com/AbdulTariq02" target="_blank" className="hover:text-white transition">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.linkedin.com/in/wahab-tariq-533595297/" target="_blank" className="hover:text-white transition">
              <FontAwesomeIcon icon={faLinkedinIn} />            </a>

            <a href="https://twitter.com" target="_blank" className="hover:text-white transition">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://www.instagram.com/wahabsurfali/" target="_blank" className="hover:text-white transition">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>


        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-8 text-center text-xs font-bold text-gray-300 w-full">
        <p>Let’s collaborate and bring your ideas to life 💡</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} AbdulWahab. All rights reserved.</p>
      </div>
    </footer>
  );
}
