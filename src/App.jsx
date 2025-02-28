import { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import ManProductPage from './pages/ManProduct/ManProductPage';
import WomanProductPage from './pages/womanproduct/WomanProductPage';

function App() {
  return (
    <>
   <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/productDetailsForMan" element={<ManProductPage />} />
          <Route path="/productDetailsForWoman" element={<WomanProductPage />} />

        </Routes>
    </>
  )
}

export default App
