import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>¡Nos Casamos!</h1>
        <h2>Patricia 💕 Dario</h2>
        <p className="date">16 de Mayo, 2026</p>
        <p className="location">Piscina Ahi, Boyeros?, 16:00h</p>
        <button className="rsvp-button">Confirmar Asistencia</button>
      </div>
    </div>
  );
}

export default Hero;