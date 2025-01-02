import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';
import '../../App.scss';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
<nav className={` navbar navbar-expand-lg position-sticky top-0 end-0 start-0 w-100 z-3 ${isScrolled ? styles.minimized : styles.navbarBackGround}`}>      <div className="container text-uppercase">
        <NavLink className="navbar-brand text-white fs-2 fw-bolder" to="/">Start Framework</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {['About', 'Portfolio', 'Contact'].map((item) => (
              <li key={item} className="nav-item me-3">
                <NavLink
                  className={({ isActive }) => (isActive ? `${styles.activ} nav-link fw-bold mt-3 mt-md-0 px-2 text-white` : "nav-link fw-bold mt-3 mt-md-0 px-2 text-white")}
                  to={item}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}