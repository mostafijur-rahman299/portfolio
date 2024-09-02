import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiPython, SiNextdotjs, SiDjango } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href="https://www.facebook.com/hey.mostafij" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaFacebookF />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://x.com/mostafijur_" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaTwitter />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://www.linkedin.com/in/hello-mostafij" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://github.com/mostafijur-rahman299" target="_blank" rel="noopener noreferrer" className="bannerIcon">
                <FaGithub />
              </a>
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiDjango />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            {/* <span className="bannerIcon">
              <SiNextdotjs />
            </span> */}
            {/* <span className="bannerIcon">
              <SiTailwindcss />
            </span> */}
          </div>
        </div>
      </div>
  )
}

export default Media