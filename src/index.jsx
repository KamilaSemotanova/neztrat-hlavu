import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Footer />
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
