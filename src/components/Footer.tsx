import React from 'react';
import Image from "next/image";
import GitHubIcon from "@public/github.svg";
import LinkedInIcon from "@public/linkedin.svg";

function Footer() {
  return (
      <>
      {/* Footer */}
      <footer className="w-full">
      <div className="flex p-2 justify-center space-x-3 bg-gray-800 text-gray-200">
      <p>Built by Ray Brown</p>
      <a href="https://raybrown.dev">www.raybrown.dev</a>

      {/* Social Icons */}
      <div className="flex space-x-2">
      {/* GitHub Logo */}
      <a href="https://github.com/raybrowndev">
      <Image
        priority
        src={GitHubIcon}
        height={22}
        width={22}
        alt="Find me on GitHub"
      />
      </a>
      {/* LinkedIn Logo */}
      <a href="https://www.linkedin.com/in/raybrowndev/">
      <Image
        priority
        src={LinkedInIcon}
        height={22}
        width={22}
        alt="Find me on GitHub"
      />
      </a>
      </div>

      </div>
  </footer>
  </>
  )
}

export default Footer;

