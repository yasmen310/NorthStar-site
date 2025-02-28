import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCartFlatbedSuitcase,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../sidebar/Sidebar";
import styles from "./navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.innerNavContainer}>
          <h1 className={styles.navTitle}>NorthStar</h1>
          <ul className={styles.navItems}>
            <NavLink
              className={`${styles.item} nav-link ${
                active === "/" ? "text-primary fw-bold" : ""
              }`}
              to="/"
              onClick={() => setActive("/")}
            >
              HOME
            </NavLink>
            <NavLink
              to="/about"
              className={`${styles.item} nav-link ${
                active === "/about" ? "text-primary fw-bold" : ""
              }`}
              onClick={() => setActive("/about")}
            >
              ABOUT
            </NavLink>

            <NavLink to="/contact"
              className={`${styles.item} nav-link ${
                active === "/contact" ? "text-primary fw-bold" : ""
              }`}
              onClick={() => setActive("/contact")}>
              CONTACT US
            </NavLink>
          </ul>
        </div>
        <div>
          <FontAwesomeIcon icon={faUser} className={styles.icons} />
          <FontAwesomeIcon
            icon={faCartFlatbedSuitcase}
            className={styles.icons}
          />
          <FontAwesomeIcon
            icon={faBars}
            className={styles.icons}
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
            aria-controls="sidebar"
          />
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default Navbar;
