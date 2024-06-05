// Header.jsx

import React from "react";
import styles from "./Header.module.css"; // Импорт стилей из файла Header.module.css
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <div className={styles.header__container}>
        <div className={styles.container_fluid}>
          <div className={styles.logoContainer}>
            <Link className={`${styles.header__logo} navbar-brand`} to="/">
              <img
                className={styles.logo}
                src="https://cdn-icons-png.flaticon.com/512/62/62834.png"
                alt="Лого"
              />
            </Link>
            <h5>Alarm Clocks</h5>
          </div>
          <div className={`collapse navbar-collapse ${styles.navbarNav}`} id="navbarNav">
            <ul className={`navbar-nav ${styles.navbarNav}`}>
              <li className="nav-item">
                <Link
                  className={`nav-link active ${styles.navLink}`}
                  aria-current="page"
                  to="/home"
                >
                  Main
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${styles.navLink}`} to="/myProfile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signUp"
                  className={`nav-link ${styles.navLink}`}
                  href="html/signup.html"
                >
                  Sign up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/signIn"
                  className={`nav-link ${styles.navLink}`}
                  href="html/signin.html"
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Header;
