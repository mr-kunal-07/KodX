import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home/Home';
import Services from './Pages/Services';
import About from './Pages/About';
import Testimonial from './components/Home/Testimonial';
import Footer from './components/Footer';
import Contact from './Pages/Contact';


const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testimonial />} />

        {/* Add other routes here as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
