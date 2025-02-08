import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#D1CFC9] text-[#2C2C2C] py-6 text-center font-poppins text-lg md:text-xl">
      Made by{" "}
      <a
        href="https://github.com/msranjana"
        className="text-[#2C2C2C] hover:text-[#8A817C] transition-colors font-semibold"
      >
        msranjana
      </a>{" "}
      with <span className="text-[#8A817C] text-2xl">♡</span>
    </footer>
  );
};

export default Footer;
