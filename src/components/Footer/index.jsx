import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <footer>
      <a
        className="footer__link"
        href="https://github.com/KamilaSemotanova/neztrat-hlavu"
      >
        Repozitář hry
      </a>
      <a
        className="footer__link"
        href="https://about-neztrathlavu.netlify.app/"
      >
        Stránka o hře{' '}
      </a>
      <p className="footer__trademark">© 2023 Neztrať hlavu</p>
    </footer>
  );
};
