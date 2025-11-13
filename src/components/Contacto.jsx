import React, { useState } from 'react';
import './Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado! Te contactaré pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="contacto">
      <div className="contacto-container">
        <h2 className="contacto-titulo">Contacto</h2>
        <p className="contacto-subtitulo">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        <div className="contacto-content">
          <div className="contacto-info">
            <h3>Información de Contacto</h3>
            <div className="info-item">
              <span className="info-icono">📧</span>
              <div>
                <h4>Email</h4>
                <p>tu.email@ejemplo.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icono">📱</span>
              <div>
                <h4>Teléfono</h4>
                <p>+1 (234) 567-8900</p>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icono">📍</span>
              <div>
                <h4>Ubicación</h4>
                <p>Ciudad, País</p>
              </div>
            </div>

            <div className="redes-sociales">
              <h4>Sígueme en:</h4>
              <div className="redes-links">
                <a href="#" className="red-social">LinkedIn</a>
                <a href="#" className="red-social">GitHub</a>
                <a href="#" className="red-social">Twitter</a>
              </div>
            </div>
          </div>

          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu.email@ejemplo.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Cuéntame sobre tu proyecto..."
              ></textarea>
            </div>

            <button type="submit" className="btn-enviar">Enviar Mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
