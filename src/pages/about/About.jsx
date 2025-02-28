import React from 'react';
import Navbar from '../../component/navbar/Navbar'; 
import Footer from '../../component/footer/Footer';
import AboutHeader from '../../component/aboutheader/AboutHeader';
import AboutFeature from '../../component/aboutFeature/AboutFeature';
import Foundars from '../../component/foundars/Foundars';
import Testimonials from '../../component/testimonials/Testimonials';
import '../style.css';
const About = () => {
  return (
    <div className='PageContainer'>
      <Navbar/>
      <AboutHeader/>
      <AboutFeature/>
      <Foundars/>
      <Testimonials/>
      <Footer/>
      
    </div>
  );
}

export default About;
