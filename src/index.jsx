import React from 'react';
import { createRoot } from 'react-dom/client';
import { isMobile, isTablet } from 'react-device-detect';
import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChemDropdown } from './components/ChemDropdown';
import { InfoBox } from './components/InfoBox';
import { chemicals } from './chemicals.js';

const App = () => {
  if (isMobile && !isTablet) {
    return (
      <>
        <Header />
        <ChemDropdown />
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <Header />
        <div>HelloPC</div>
        <Footer />
      </>
    );
  }
};

createRoot(document.querySelector('#app')).render(<App />);
