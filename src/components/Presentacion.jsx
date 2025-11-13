import React from 'react';
import './Presentacion.css';

const Presentacion = () => {
  return (
    <section id="presentacion" className="presentacion">
      <div className="presentacion-container">
        <div className="presentacion-imagen">
          <div className="foto-perfil">
            <img
              src="https://via.placeholder.com/300"
              alt="Foto de perfil"
            />
          </div>
        </div>

        <div className="presentacion-info">
          <h2 className="nombre">Tu Nombre Aquí</h2>
          <h3 className="especialidad">Desarrollador Full Stack</h3>
          <p className="descripcion">
            Apasionado por crear soluciones digitales innovadoras y funcionales.
            Con experiencia en desarrollo web moderno, siempre buscando aprender
            nuevas tecnologías y mejorar mis habilidades.
          </p>
          <div className="presentacion-botones">
            <a href="#proyectos" className="btn btn-primary">Ver Proyectos</a>
            <a href="#contacto" className="btn btn-secondary">Contactar</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presentacion;
