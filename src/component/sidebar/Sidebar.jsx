import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sun, Moon, Globe, Home, Info, Phone, ShoppingBag } from "react-feather";
import styles from "./sidebar.module.css";

const Sidebar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [language, setLanguage] = useState(localStorage.getItem("language") || "ltr");
  const isDarkMode = theme === "dark";

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("dir", language);
    localStorage.setItem("language", language);
  }, [language]);

  const toggleTheme = () => {
    setTheme(isDarkMode ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLanguage(language === "ltr" ? "rtl" : "ltr");
  };

  return (
    <div
      className={`offcanvas ${language === "rtl" ? "offcanvas-start" : "offcanvas-end"} ${styles.sidebar}`}
      tabIndex="-1"
      id="sidebar"
      aria-labelledby="sidebarLabel"
    >
      <div className={`offcanvas-header ${styles.sidebarHeader}`}>
        <h5 className="offcanvas-title" id="sidebarLabel">
           Menu Options
        </h5>
      </div>

      <div className={`offcanvas-body ${styles.sidebarBody}`}>
        <ul className="list-unstyled">
          <li className={styles.sidebarItem}>
            <button className={styles.toggleButton} onClick={toggleTheme}>
              {isDarkMode ? <Moon size={18}  className="me-2"/> : <Sun size={18} className="me-2" />}
              {isDarkMode ? " Dark Mode" : " Light Mode"}
            </button>
          </li>

          <li className={styles.sidebarItem}>
            <button className={styles.toggleButton} onClick={toggleLanguage}>
              <Globe size={18}  className="me-2" />
              {language === "ltr" ? " Switch to RTL" : " Switch to LTR"}
            </button>
          </li>

  
          <li>
            <Link to="/" className={styles.sidebarLink}>
              <Home size={18} /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={styles.sidebarLink}>
              <Info size={18} /> About
            </Link>
          </li>
          <li>
            <Link to="/contact" className={styles.sidebarLink}>
              <Phone size={18} /> Contact Us
            </Link>
          </li>
          <li>
            <Link to="/productDetailsForMan" className={styles.sidebarLink}>
              <ShoppingBag size={18} /> Product Details For Men
            </Link>
          </li>
          <li>
            <Link to="/productDetailsForWoman" className={styles.sidebarLink}>
              <ShoppingBag size={18} /> Product Details For Women
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
