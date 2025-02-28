import React from "react";
import visa from "../../assets/IMGS/Rectangle 13.png";
import visaElectron from "../../assets/IMGS/Rectangle 16.png";
import payPal from "../../assets/IMGS/Rectangle 15.png";
import masterCard from "../../assets/IMGS/Rectangle 14.png";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <>
      <div className={styles.footerContainer}>
        <div>
          <h6>Company info</h6>
          <p>About Us</p>
          <p>Latest Posts</p>
          <p>Contact Us</p>
          <p>Shop</p>
        </div>
        <div>
          <h6>help links</h6>
          <p>Tracking</p>
          <p>Order Status</p>
          <p>Delivery</p>
          <p>Shipping Info</p>
          <p>FAQ</p>
        </div>
        <div>
          <h6>useful links</h6>
          <p>Special Offers</p>
          <p>Gift Cards</p>
          <p>Advetising</p>
          <p>Terms of Use</p>
        </div>
        <div>
          <h6>get in the know</h6>
          <input type="text"  placeholder="Email"/>
        </div>
      </div>

      <hr />
      <div className={styles.copyRightContainer}>  
        <div className={styles.copyRightInnerContainer}>
          <p>© 2020 NorthStar eCommerce</p>
          <p>Privacy Policy Terms & Conditions</p>
        </div>
        <div>
          <img src={visa} alt="" />
          <img src={masterCard} alt="" />
          <img src={payPal} alt="" />
          <img src={visaElectron} alt="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
