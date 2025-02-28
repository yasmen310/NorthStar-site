import React from "react";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";
import NewProduct from "../../component/newproduct/NewProduct";
import Benefits from "../../component/benefits/benefits";
import Promo from "../../component/promo/promo";
import TopSeller from "../../component/topseller/TopSeller";
import '../style.css';
const Home = () => {
  return (
    <div className="PageContainer">
      <Navbar />
      <Header />
      <NewProduct />
      <Benefits />
      <Promo />
      <TopSeller />
      <Footer />
    </div>
  );
};

export default Home;
