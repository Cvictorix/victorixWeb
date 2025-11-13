import React from 'react';
import './Valores.css';

const Valores = () => {
  const valores = [
    {
      id: 1,
      titulo: 'Innovación',
      descripcion: 'Siempre buscando nuevas formas de resolver problemas y crear soluciones creativas.',
      icono: '💡'
    },
    {
      id: 2,
      titulo: 'Calidad',
      descripcion: 'Compromiso con la excelencia en cada línea de código y cada proyecto entregado.',
      icono: '⭐'
    },
    {
      id: 3,
      titulo: 'Colaboración',
      descripcion: 'Trabajo en equipo y comunicación efectiva para lograr los mejores resultados.',
      icono: '🤝'
    },
    {
      id: 4,
      titulo: 'Aprendizaje',
      descripcion: 'Dedicación constante al crecimiento profesional y la actualización tecnológica.',
      icono: '📚'
    }
  ];

  return (
    <section id="valores" className="valores">
      <div className="valores-container">
        <h2 className="valores-titulo">Mis Valores</h2>
        <p className="valores-subtitulo">
          Los principios que guían mi trabajo y desarrollo profesional
        </p>

        <div className="valores-grid">
          {valores.map((valor) => (
            <div key={valor.id} className="valor-card">
              <div className="valor-icono">{valor.icono}</div>
              <h3 className="valor-titulo">{valor.titulo}</h3>
              <p className="valor-descripcion">{valor.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Valores;
