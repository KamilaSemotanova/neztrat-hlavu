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
    <div className="about__page" id="outerElement" onClick={handleClick}>
      <div className="about__box">
        <h1 className="about__title">Neztrať hlavu!</h1>
        <div className="about__text-box">
          <div>
            <p>
              Ve této hře se zábavnou formou naučíte, jaké nebezpečí číhá v
              míchání běžně dostupných čistících prostředků. Vaším úkolem je
              experimentovat s těmito látkami a vytvářet různé kombinace, abyste
              zjistili, jaké reakce nastanou.
            </p>
            <div className="about__inner">
              <p className="about__inner-title">A jak na to?</p>
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

        <div className="about__close-center">
          <button
            className="about__close-btn"
            onClick={() => {
              onClose(false);
            }}
          >
            Zpět
          </button>
        </div>
      </div>
    </div>
  );
};
