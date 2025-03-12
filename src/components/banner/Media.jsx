import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SiPython, SiR, SiTableau, SiMicrosoftazure, SiStatamic } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
            <span className="bannerIcon">
              <FaTwitter />
            </span>
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiPython /> {/* Python for health data analysis */}
            </span>
            <span className="bannerIcon">
              <SiR /> {/* R for statistical computing */}
            </span>
            <span className="bannerIcon">
              <SiStatamic /> {/* STATA for health research */}
            </span>
            <span className="bannerIcon">
              <SiTableau /> {/* Tableau for data visualization */}
            </span>
            <span className="bannerIcon">
              <SiMicrosoftazure /> {/* Azure for cloud-based health data solutions */}
            </span>
          </div>
        </div>
      </div>
  );
}

export default Media;
