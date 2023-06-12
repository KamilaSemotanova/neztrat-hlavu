import React from 'react';
import './style.css';

export const About = ({ onClose }) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.id === 'outerElement') {
      onClose(false);
    }
  };

  return (
    <div className="info__about-page" id="outerElement" onClick={handleClick}>
      <div className="info__about-text">
        <button
          onClick={() => {
            onClose(false);
          }}
          className="info__about-closebtn"
        >
          ╳
        </button>
        <h1 className="info__about-title">Neztrať hlavu!</h1>
        <p>
          Ve této hře se zábavnou formou naučíte, jaké nebezpečí číhá v míchání
          běžně dostupných čistících prostředků. Vaším úkolem je experimentovat
          s těmito látkami a vytvářet různé kombinace, abyste zjistili, jaké
          reakce nastanou.
        </p>
        <p>
          <b>A jak na to?</b>
        </p>
        <p>
          Přesuňte dva čistící prostředky do mixovacího pole uprostřed a
          zjistěte, jak spolu reagují!
        </p>
      </div>
    </div>
  );
};
