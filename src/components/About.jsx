import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        {/* Left Side: Introduction */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700 mb-4">
            Hi, I'm [Your Name], a passionate artist specializing in Mandala, 
            Painting, Sketches, and Doodles. My work reflects my creativity 
            and dedication to exploring intricate designs and innovative techniques.
          </p>
          <p className="text-lg text-gray-700">
            Welcome to my portfolio! I hope you enjoy browsing through my creations. 
            Feel free to reach out for collaborations or inquiries.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="flex justify-center">
          <img 
              src="../assets/about-me.jpg"alt="About Me" 
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
