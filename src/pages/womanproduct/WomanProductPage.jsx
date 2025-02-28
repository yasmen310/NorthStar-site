import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import WomanProductDetails from "../../component/productdetailswoman/WomanProductDetails";
import ProductTabs from '../../component/producttabs/ProductTabs';
import '../style.css';
const WomanProductPage = () => {
  return (
    <div className="PageContainer">
      <Navbar />
       <WomanProductDetails/>
       <ProductTabs/>
      <Footer />
    </div>
  );
};

export default WomanProductPage;
