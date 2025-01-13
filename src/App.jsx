import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div id="home">
      <Navbar />
      <About /> {/* Move this above the Gallery */}
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
