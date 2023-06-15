import React from 'react';
import './style.css';

export const Footer = () => {
  return (
    <footer>
      <p className="footer__trademark">© 2023 Neztrať hlavu</p>
      <a className="footer__link" href="https://github.com/KamilaSemotanova/neztrat-hlavu" target="_blank">Repozitář hry</a>
      <a className="footer__link" href='https://about-neztrathlavu.netlify.app/' target="_blank">Stránka o hře: </a>
    </footer>
  );
};
