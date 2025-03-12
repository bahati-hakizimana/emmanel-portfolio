import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import logo1 from '../../assets/images/logo1.jpg';

const Footer = () => {
  return (
    <div className="w-full py-20 h-auto border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img src={logo1} alt="logo" className='w-12 h-12 rounded-full object-cover' />
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
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">Quick Link</h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li><a href="#about" className="hover:text-designColor duration-300">About</a></li>
          <li><a href="#portfolio" className="hover:text-designColor duration-300">Portfolio</a></li>
          <li><a href="#services" className="hover:text-designColor duration-300">Services</a></li>
          <li><a href="#blog" className="hover:text-designColor duration-300">Blog</a></li>
          <li><a href="#contact" className="hover:text-designColor duration-300">Contact</a></li>
        </ul>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wider">Resources</h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
          <li><a href="https://www.qatar-tribune.com/article/47302/NATION/UCQ-spearheads-global-meet-on-use-of-data-science-to-improve-healthcare" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">Global meet on Health Data Science</a></li>
          <li><a href="https://hqca.ca/wp-content/uploads/2018/05/November_2011_Newsletter.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">Press Release: Health Quality Council of Alberta</a></li>
          <li><a href="https://yaoundeinfo.com/tag/emmanuel-ngwakongnwi/" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">News Coverage in Cameroon</a></li>
          <li><a href="https://minsante.cm/site/?q=fr/content/heath-data-phase-4-orienter-les-ressources-dans-le-secteur-sant%C3%A9-pour-les-ann%C3%A9es-%C3%A0-venir" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">Health Data Phase 4 - Cameroon</a></li>
          <li><a href="http://onsp.minsante.cm/sites/default/files/publications/302/CIS_MINSANTE_RAPPORT%20FINAL%20CANCERS%202022_ENG.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-designColor duration-300">First Cancer Report in Cameroon</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
