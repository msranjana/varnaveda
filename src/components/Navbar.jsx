import React, { useState } from "react";
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ onContactClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full backdrop-blur-md bg-[#D1CFC9]/70 text-[#2C2C2C] py-3 px-6 shadow-lg z-50"
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold font-raleway text-[#2C2C2C] hover:text-[#8A817C] transition-all duration-300"
        >
          VarnaVeda
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <motion.a
            whileHover={{ scale: 1.1, color: "#8A817C" }}
            href="#home"
            className="text-lg font-bold transition-all duration-300"
          >
            Home
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.1, color: "#8A817C" }}
            onClick={onContactClick}
            className="text-lg font-bold transition-all duration-300"
          >
              Get in touch
              </motion.button>
          <motion.a
            whileHover={{ scale: 1.1, color: "#8A817C" }}
            href="https://www.instagram.com/varnaveda"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold flex items-center transition-all duration-300"
          >
            <FaInstagram className="mr-2 text-2xl" />
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 w-full bg-[#D1CFC9]/90 backdrop-blur-md shadow-lg py-5 flex flex-col items-center space-y-4"
          >
            <a
              href="#home"
              className="text-lg font-bold text-[#2C2C2C] hover:text-[#8A817C] transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="text-lg font-bold text-[#2C2C2C] hover:text-[#8A817C] transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              About Me
            </a>
            <button
              onClick={() => {
                onContactClick();
                setIsOpen(false);
              }}
              className="text-lg font-bold text-[#2C2C2C] hover:text-[#8A817C] transition-all duration-300"
            >
              Get in touch
            </button>
            <a
              href="https://www.instagram.com/varnaveda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg flex items-center font-bold text-[#2C2C2C] hover:text-[#8A817C] transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              <FaInstagram className="mr-2 text-2xl" /> Instagram
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
