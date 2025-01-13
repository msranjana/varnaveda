import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home" className="text-xl font-bold">My Artwork</a>
        <div className="space-x-6">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">About Me</a>
          <a href="mailto:your-msranjana22@gmail.com" className="hover:underline">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
