import React from "react";
import { motion } from "framer-motion";


const categories = {
    Mandala: [
      require("../assets/mandala/mandala1.jpg"),
      require("../assets/mandala/mandala2.jpg"),
      require("../assets/mandala/mandala3.jpg"),
      require("../assets/mandala/mandala4.jpg"),
      require("../assets/mandala/mandala5.jpg"),
      require("../assets/mandala/mandala6.jpg"),
      require("../assets/mandala/mandala7.jpg"),
      require("../assets/mandala/mandala8.jpg"),
      require("../assets/mandala/mandala9.jpg"),
      require("../assets/mandala/mandala10.jpeg"),
      require("../assets/mandala/mandala11.jpg"),
      require("../assets/mandala/mandala12.jpg"),
      require("../assets/mandala/mandala13.jpg"),

    ],
    Painting: [
      require("../assets/painting/painting1.jpg"),
      require("../assets/painting/painting2.jpg"),
      require("../assets/painting/painting3.jpg"),
      require("../assets/painting/painting4.jpg"),
      require("../assets/painting/painting5.jpg"),
      require("../assets/painting/painting6.jpg"),
      require("../assets/painting/painting7.jpg"),
      require("../assets/painting/painting8.jpg"),
      require("../assets/painting/painting9.jpg"),
      require("../assets/painting/painting10.jpg"),
      require("../assets/painting/painting11.jpg"),
      require("../assets/painting/painting12.jpg"),

    ],
    Sketches: [
      require("../assets/sketches/sketch1.jpg"),
      require("../assets/sketches/sketch2.jpg"),
      require("../assets/sketches/sketch3.jpg"),
      require("../assets/sketches/sketch4.jpg"),

    ],
    Doodles: [
      require("../assets/doodles/doodle1.jpg"),
      require("../assets/doodles/doodle2.jpg"),
      require("../assets/doodles/doodle3.jpg"),
      require("../assets/doodles/doodle4.jpg"),

    ],
  };
  

const Gallery = () => {
  return (
    <section id="home" className="min-h-screen bg-white p-8">
      <h2 className="text-4xl font-bold text-center mb-8">My Artwork</h2>
      {Object.entries(categories).map(([category, images], catIndex) => (
        <div key={catIndex} className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="cursor-pointer"
              >
                <img 
                  src={src} 
                  alt={`${category} ${index + 1}`} 
                  className="w-full h-full object-cover rounded-lg shadow-lg" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Gallery;
