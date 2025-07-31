import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.jpeg';

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow" data-aos="fade-down">
      <div className="container-fluid px-4">
        <div className="d-flex align-items-center">
          <img
            src={Logo}
            alt="Logo"
            style={{ height: '45px', width: 'auto', marginRight: '12px', borderRadius: '6px' }}
          />
          <Link className="navbar-brand fs-4 fw-bold text-white" to="/">
            Food Hub
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav text-center">
            <li className="nav-item">
              <Link
                className={`nav-link fw-semibold nav-btn ${location.pathname === '/' ? 'active text-warning' : 'text-white'}`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-semibold nav-btn ${location.pathname === '/about' ? 'active text-warning' : 'text-white'}`}
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link fw-semibold nav-btn ${location.pathname === '/products' ? 'active text-warning' : 'text-white'}`}
                to="/products"
              >
                Products
              </Link>
            </li>
            <li className="nav-item">
              <button className="nav-link btn text-light fw-semibold nav-btn disabled" disabled>
                Coming Soon
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
