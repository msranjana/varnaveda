import React, { useState } from "react";
import { motion } from "framer-motion";

const categories = {
  Mandalas: [
    require("../assets/mandalas/mandala1.jpg"),
    require("../assets/mandalas/mandala2.jpg"),
    require("../assets/mandalas/mandala3.jpg"),
    require("../assets/mandalas/mandala4.jpg"),
    require("../assets/mandalas/mandala5.jpg"),
    require("../assets/mandalas/mandala6.jpg"),
    require("../assets/mandalas/mandala7.jpg"),
    require("../assets/mandalas/mandala8.jpg"),
    require("../assets/mandalas/mandala9.jpg"),
    require("../assets/mandalas/mandala10.jpeg"),
    require("../assets/mandalas/mandala11.jpg"),
    require("../assets/mandalas/mandala12.jpg"),
    require("../assets/mandalas/mandala13.jpg"),
    require("../assets/mandalas/mandala14.jpg"),
    require("../assets/mandalas/mandala15.jpg"),
    require("../assets/mandalas/mandala16.jpg"),
  ],
  Paintings: [
    require("../assets/paintings/painting1.jpg"),
    require("../assets/paintings/painting2.jpg"),
    require("../assets/paintings/painting3.jpg"),
    require("../assets/paintings/painting4.jpg"),
    require("../assets/paintings/painting5.jpg"),
    require("../assets/paintings/painting6.jpg"),
    require("../assets/paintings/painting7.jpg"),
    require("../assets/paintings/painting8.jpg"),
    require("../assets/paintings/painting9.jpg"),
    require("../assets/paintings/painting10.jpg"),
    require("../assets/paintings/painting11.jpg"),
    require("../assets/paintings/painting12.jpg"),
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
  SpeedPaintings: [
    require("../assets/speedpaintings/speedpainting1.jpg"),
    require("../assets/speedpaintings/speedpainting2.jpg"),
    require("../assets/speedpaintings/speedpainting3.png"),
   
  ],
};

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const filteredCategories = selectedCategory === "All" ? categories : { [selectedCategory]: categories[selectedCategory] };

  return (
    <section id="home" className="min-h-screen bg-[#D1CFC9] p-8">
      <h2 className="text-4xl font-bold text-center text-[#2C2C2C] mb-10 font-poppins">
        My Artworks
      </h2>
      <div className="flex justify-center mb-10 flex-wrap gap-2 sm:gap-4">
        {["All", ...Object.keys(categories)].map((category) => (
          <motion.button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-3 py-1 sm:px-5 sm:py-2 text-sm sm:text-lg font-semibold rounded-full transition-all duration-300 shadow-md 
              ${
                selectedCategory === category
                  ? "bg-[#2C2C2C] text-white scale-105 shadow-lg"
                  : "bg-white text-[#2C2C2C] hover:bg-[#8A817C] hover:text-white hover:scale-105"
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {Object.entries(filteredCategories).map(([category, images], catIndex) => (
        <div key={catIndex} className="mb-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                className="relative group cursor-pointer"
                onClick={() => handleImageClick(src)}
              >
                {/* Image */}
                <img
                  src={src}
                  alt={`${category} ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg transition-opacity duration-300">
                  <p className="text-white text-lg font-semibold">{category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Fullscreen View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <motion.img
            src={selectedImage}
            alt="Selected Artwork"
            className="max-w-full max-h-full rounded-lg shadow-2xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          />
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={handleClose}
          >
            ✕
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;