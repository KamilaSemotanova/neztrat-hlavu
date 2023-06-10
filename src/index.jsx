import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ChemDropdown } from "./components/ChemDropdown";
import {InfoBox} from "./components/InfoBox";
import {chemicals} from "./chemicals.js";

const App = () => {
  return (
    <>
      <Header />
        <ChemDropdown />
      <Footer />
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
