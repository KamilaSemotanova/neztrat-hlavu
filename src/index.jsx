import React from 'react';
import { createRoot } from 'react-dom/client';
import { isMobile, isTablet } from 'react-device-detect';
import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChemDropdown } from './components/ChemDropdown';
import { ChemCircle } from './components/ChemCircle';

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
        <Header classname="app-header"/>
        <ChemCircle classname="app-chemcircle"/>
        <Footer />
      </>
    );
  }
};

createRoot(document.querySelector('#app')).render(<App />);
