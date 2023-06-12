import React, { useState } from 'react';
import './style.css';
import { About } from './About';

export const Header = () => {
  const [showAbout, setShowAbout] = useState(false);

  const handleClick = () => {
    setShowAbout(!showAbout);
  };

  return (
    <header>
      <button className="info__about-btn" onClick={handleClick}>
        ?
      </button>
      <h1 className="game__header-title">Neztrať hlavu!</h1>
      {showAbout && (
        <div>
          <button onClick={handleClick} className="info__about-closebtn">
            ╳
          </button>
          <About />
        </div>
      )}
    </header>
  );
};
