import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const location = useLocation().pathname;

  return (
    <nav className="navbar sticky-top navbar-expand-md background-blue navbar-dark border-bottom-bold">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fw-bold header-font">
          PG
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/portfolio"
                className={location === '/portfolio' ? 'nav-link active' : 'nav-link'}>
                my portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/resume"
                className={location === '/resume' ? 'nav-link active' : 'nav-link'}>
                my skills & cv
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className={location === '/blog' ? 'nav-link active' : 'nav-link'}>
                blog
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className={location === '/contact' ? 'nav-link active' : 'nav-link'}>
                contact me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
