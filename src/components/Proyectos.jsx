import React from 'react';
import './Proyectos.css';

const Proyectos = () => {
  const proyectos = [
    {
      id: 1,
      titulo: 'E-commerce Platform',
      descripcion: 'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.',
      tecnologias: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      imagen: 'https://via.placeholder.com/400x250',
      link: '#'
    },
    {
      id: 2,
      titulo: 'App de Gestión de Tareas',
      descripcion: 'Aplicación para gestionar proyectos y tareas en equipo con funcionalidades en tiempo real.',
      tecnologias: ['React', 'Firebase', 'Material-UI'],
      imagen: 'https://via.placeholder.com/400x250',
      link: '#'
    },
    {
      id: 3,
      titulo: 'Dashboard Analytics',
      descripcion: 'Panel de control interactivo con visualización de datos y gráficos estadísticos en tiempo real.',
      tecnologias: ['React', 'D3.js', 'Express', 'PostgreSQL'],
      imagen: 'https://via.placeholder.com/400x250',
      link: '#'
    },
    {
      id: 4,
      titulo: 'Red Social',
      descripcion: 'Plataforma social con sistema de publicaciones, comentarios, likes y chat en tiempo real.',
      tecnologias: ['React', 'Socket.io', 'Node.js', 'MySQL'],
      imagen: 'https://via.placeholder.com/400x250',
      link: '#'
    }
  ];

  return (
    <section id="proyectos" className="proyectos">
      <div className="proyectos-container">
        <h2 className="proyectos-titulo">Mis Proyectos</h2>
        <p className="proyectos-subtitulo">
          Algunos de los proyectos en los que he trabajado
        </p>

        <div className="proyectos-grid">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="proyecto-card">
              <div className="proyecto-imagen">
                <img src={proyecto.imagen} alt={proyecto.titulo} />
                <div className="proyecto-overlay">
                  <a href={proyecto.link} className="proyecto-link">Ver Proyecto</a>
                </div>
              </div>
              <div className="proyecto-info">
                <h3 className="proyecto-titulo">{proyecto.titulo}</h3>
                <p className="proyecto-descripcion">{proyecto.descripcion}</p>
                <div className="proyecto-tecnologias">
                  {proyecto.tecnologias.map((tech, index) => (
                    <span key={index} className="tecnologia-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;
