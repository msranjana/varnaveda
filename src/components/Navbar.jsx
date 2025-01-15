import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#F0EBE3] text-[#2C2C2C] py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold hover:text-[#8A817C] transition-colors"
        >
          My Artwork
        </a>
        <div className="space-x-8">
          <a
            href="#home"
            className="text-lg hover:text-[#8A817C] transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-lg hover:text-[#8A817C] transition-colors"
          >
            About Me
          </a>
          <a
            href="mailto:msranjana22@gmail.com"
            className="text-lg hover:text-[#8A817C] transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
