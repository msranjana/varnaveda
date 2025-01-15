import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#F0EBE3] py-16 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Left Side: Introduction */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#2C2C2C]">About Me</h2>
          <p className="text-lg text-[#8A817C] mb-6 leading-relaxed">
            Hi, I'm <span className="font-semibold text-[#2C2C2C]">[Your Name]</span>, a passionate artist specializing in Mandala, 
            Painting, Sketches, and Doodles. My work reflects my creativity 
            and dedication to exploring intricate designs and innovative techniques.
          </p>
          <p className="text-lg text-[#8A817C] leading-relaxed">
            Welcome to my portfolio! I hope you enjoy browsing through my creations. 
            Feel free to reach out for collaborations or inquiries.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
          <img 
            src="../assets/aboutme.jpeg" 
            alt="About Me" 
            className="rounded-lg shadow-lg max-w-full h-auto object-cover border border-[#D1CFC9]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
