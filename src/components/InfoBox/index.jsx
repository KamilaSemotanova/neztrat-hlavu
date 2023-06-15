import React, {useState} from 'react';
import './style.css';
import { chemicals } from '../../chemicals';

export const InfoBox = ({ id, onClose }) => {
  const selectedChemical = chemicals.find((chemical) => chemical.id === id);

  const handleClick = (event) => {
    event.preventDefault();
    if (event.target.id === 'outerElement') {
      onClose();
    }
    onClose()
    console.log(onClose)
  };

  return (
    <div className="infobox__overlay" onClick={handleClick}>
      <div className="infobox__container container">
        <h2 className="infobox__heading">{selectedChemical.nameOfProduct}</h2>
        <div className="infobox__body">
          <div className="infobox-chemical">
            {selectedChemical.nameOfChemical}
          </div>
          <div className="infobox-other">{selectedChemical.nameOfProduct}</div>
          <div className="infobox-use">{selectedChemical.use}</div>
          <div className="infobox-specs">{selectedChemical.specification}</div>
          <div className="infobox-warnings">{selectedChemical.warningSign}</div>
        </div>
          <div className="infobox__btn-center">
        <button className="infobox__btn" onClick={handleClick}>Zpět</button>
          </div>
      </div>
    </div>
  );
};
