import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mi Portafolio</h3>
            <p>Desarrollador Full Stack apasionado por crear soluciones digitales innovadoras.</p>
          </div>

          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#presentacion">Sobre Mi</a></li>
              <li><a href="#valores">Valores</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contacto</h4>
            <ul className="footer-contact">
              <li>tu.email@ejemplo.com</li>
              <li>+1 (234) 567-8900</li>
              <li>Ciudad, País</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Sígueme</h4>
            <div className="footer-social">
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="GitHub">GitHub</a>
              <a href="#" aria-label="Twitter">Twitter</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mi Portafolio. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
