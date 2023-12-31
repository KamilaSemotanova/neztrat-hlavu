import React, { useState } from 'react';
import './style.css';
import { About } from './About';

export const Header = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleClick = () => {
    setShowAbout(true);
  };

  return (
    <header>
      <button className="info__about-btn" onClick={handleClick}>
        <span className="info__about-btn_text">?</span>
      </button>
      <h1 className="game__header-title">Neztrať hlavu!</h1>
      {showAbout && <About onClose={setShowAbout} />}
    </header>
  );
};
