import React, { useState } from 'react';
import './style.css';
import { About } from './About';

export const Header = () => {
  const [showAbout, setShowAbout] = useState(false)

  const handleClick = () => {
    setShowAbout(!showAbout)
  }

  return (
    <header>
      <button className="aboutGame" onClick={handleClick}>?</button>
      <h1 className="appLogo">Neztrať hlavu!</h1>
      {showAbout && <About/>}
    </header>
  );
};
