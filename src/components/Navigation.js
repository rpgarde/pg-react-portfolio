import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar sticky-top navbar-expand-md bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#about">paolo garde.</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a aria-current="page" href="#about"
                className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                onClick={() => handlePageChange('About')}
              >
                about me
              </a>
            </li>
            <li className="nav-item">
              <a aria-current="page" href="#portfolio"
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                onClick={() => handlePageChange('Portfolio')}
              >
                my portfolio
              </a>
            </li>          
            <li className="nav-item">
              <a aria-current="page" href="#resume"
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                onClick={() => handlePageChange('Resume')}
              >
                my resume
              </a>
            </li>
            <li className="nav-item">
              <a aria-current="page" href="#contact"
                className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                onClick={() => handlePageChange('Contact')}
              >
                contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
