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
      <div className="info__about-box">
        <div className="info__about-header">
          <h1 className="info__about-title">Neztrať hlavu!</h1>
          <button
            onClick={() => {
              onClose(false);
            }}
            className="info__about-closebtn"
          >
            ╳
          </button>
        </div>
        <div className="info__about-text">
          <div>
            <p>
              Ve této hře se zábavnou formou naučíte, jaké nebezpečí číhá v
              míchání běžně dostupných čistících prostředků. Vaším úkolem je
              experimentovat s těmito látkami a vytvářet různé kombinace, abyste
              zjistili, jaké reakce nastanou.
            </p>
            <div className="info__about-inner_text">
              <p className="info__about-inner_title">A jak na to?</p>
              <p>
                Přesuňte dva čistící prostředky do mixovacího pole uprostřed a
                zjistěte, jak spolu reagují!
              </p>
            </div>
          </div>
          <img
            src={require('./img/erlenmeyer.png')}
            className="info__about-logo"
          />
        </div>
      </div>
    </div>
  );
};
