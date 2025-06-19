/*import React from "react";*/

const About = () => {
  return (
    <section id="about" className="bg-[#D1CFC9] py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side: Introduction */}
        <div className="w-full md:w-3/4 mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-base sm:text-lg md:text-xl text-[#2C2C2C] mb-4 sm:mb-6 leading-relaxed text-justify">
            Namaskara! I'm{" "}
            <span className="font-semibold text-[#2C2C2C]">Ranjana</span>, a
            passionate artist specializing in Mandala and Painting. Beyond that, I
            enjoy sketching and doodling, letting my imagination flow freely.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#2C2C2C] leading-relaxed text-justify">
            My inspiration often comes from nature, culture, and the everyday
            beauty around me.
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#2C2C2C] leading-relaxed text-justify">
            For collaborations, commissions, or just a friendly hello, feel free
            to connect with me on Instagram or drop me a message!
          </p>
          <p className="text-base sm:text-lg md:text-xl text-[#2C2C2C] leading-relaxed text-justify">
            When I'm not drawing, you’ll find me capturing moments on my camera
           which is available on Pinterest.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/4 flex justify-center items-center">
          <img
            src={require("../assets/me.JPG")}
            alt="About Me"
            className="w-full max-w-[350px] md:max-w-[450px] h-auto border-0 shadow-none bg-transparent p-0 m-0"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
