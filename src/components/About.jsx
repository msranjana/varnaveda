import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-[#D1CFC9] py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Introduction */}
        <div className="md:w-3/4">
          <p className="text-xl text-[#2C2C2C] mb-6 leading-relaxed">
            Hi ! I'm <span className="font-semibold text-[#2C2C2C]">Ranjana</span>, a passionate artist specializing in Mandala and
            Painting. I also doodle and sketch. My work reflects my creativity 
            and dedication to exploring intricate designs and innovative techniques.
          </p>
          <p className="text-xl text-[#2C2C2C] leading-relaxed">
           Welcome to my portfolio! 
          I hope you enjoy browsing through my creations . 
          Feel free to reach out for collaborations 🤝 or enquiries 📩. Also check out my <a href="https://www.instagram.com/_budding_artist/" className="text-[#2C2C2C] hover:text-[#8A817C] transition-colors font-semibold">instagram page</a>.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/4 flex justify-center items-center">
          <img 
            src={require("../assets/aboutmee.png")} 
            alt="About Me" 
            className="w-full max-w-[350px] md:max-w-[450px] h-auto border-0 shadow-none bg-transparent p-0 m-0"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
