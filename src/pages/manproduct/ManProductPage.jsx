import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from '../../component/navbar/Navbar';
import Footer from '../../component/footer/Footer';
import ManProductDetails from '../../component/productdetailsman/ManProductDetails';
import ProductTabs from '../../component/producttabs/ProductTabs';
import '../style.css';
const ManProductPage = () => {
  return (
    <div className='PageContainer'>
      <Navbar/>
         <ManProductDetails/>
         <ProductTabs/>
      <Footer/>
    </div>
  );
}

export default ManProductPage;
