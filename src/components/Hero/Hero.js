import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>¡Nos Casamos!</h1>
        <h2>Ana 💕 Carlos</h2>
        <p className="date">15 de Junio, 2024</p>
        <p className="location">Jardín del Recuerdo, Ciudad de México</p>
        <button className="rsvp-button">Confirmar Asistencia</button>
      </div>
    </div>
  );
}

export default Hero;