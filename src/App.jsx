import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div id="home">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Gallery />
      </motion.div>
      {isContactOpen && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
