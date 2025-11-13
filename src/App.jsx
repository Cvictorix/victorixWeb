import React from 'react';
import Header from './components/Header';
import Presentacion from './components/Presentacion';
import Valores from './components/Valores';
import Proyectos from './components/Proyectos';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main id="inicio">
        <Presentacion />
        <Valores />
        <Proyectos />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;
