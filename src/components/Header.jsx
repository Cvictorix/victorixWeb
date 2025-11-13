import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Mi Portafolio</h1>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={() => scrollToSection('inicio')}>Inicio</a></li>
            <li><a href="#presentacion" onClick={() => scrollToSection('presentacion')}>Sobre Mi</a></li>
            <li><a href="#valores" onClick={() => scrollToSection('valores')}>Valores</a></li>
            <li><a href="#proyectos" onClick={() => scrollToSection('proyectos')}>Proyectos</a></li>
            <li><a href="#contacto" onClick={() => scrollToSection('contacto')}>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
