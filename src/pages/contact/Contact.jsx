import React from 'react';
import ContactHeader from '../../component/contactheader/ContactHeader';
import ContactForm from '../../component/contactform/ContactForm';
import Navbar from '../../component/navbar/Navbar'; 
import Footer from '../../component/footer/Footer';
import '../style.css';
const Contact = () => {
  return (
    <div className='PageContainer'>
      <Navbar/>
      <ContactHeader/>
      <ContactForm/>
      <Footer/>
    </div>
  );
}

export default Contact;
