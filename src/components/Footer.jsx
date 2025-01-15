import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#F0EBE3] text-[#2C2C2C] py-4 text-center border-t border-[#D1CFC9]">
      Made by{" "}
      <a
        href="https://github.com/msranjana"
        className="text-[#8A817C] hover:text-[#2C2C2C] transition-colors font-semibold"
      >
        msranjana
      </a>{" "}
      with <span className="text-[#8A817C]">♡</span>
    </footer>
  );
};

export default Footer;
