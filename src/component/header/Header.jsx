import React from "react";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>
        stylist picks beat
        <br />
        the heat
        <br/>
        <button className={styles.headerBtn}>Shop Now</button>
      </h1>

    </div>
  );
};

export default Header;
