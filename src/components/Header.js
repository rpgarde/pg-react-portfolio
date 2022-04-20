import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './Footer';
import Blog from './pages/Blog';

export default function PortfolioContainer() {
  return (
    <HashRouter>
      <div className="d-flex flex-column vh-100">
        <Navigation />
        <main className="container mt-5">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="resume" element={<Resume />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}
