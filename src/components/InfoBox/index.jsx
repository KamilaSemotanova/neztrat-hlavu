import React, {useState} from 'react';
import './style.css';
import { chemicals } from '../../chemicals';
import { isMobile, isTablet } from 'react-device-detect';

export const InfoBox = ({ id, onClose }) => {
  const selectedChemical = chemicals.find((chemical) => chemical.id === id);


  return (
    <div className="infobox__overlay">
      <div className={isMobile ? "infobox__container mobile" : "infobox__container"}>
        <h2 className="infobox__heading">{selectedChemical.nameOfProduct}</h2>
        <div className="infobox__body">
          <div className="infobox-chemical">
            <h2 className="infobox__bold">Název chemické sloučeniny:</h2> {selectedChemical.nameOfChemical}
          </div>
          <div className="infobox-other"><h2 className="infobox__bold">Také v:</h2> {selectedChemical.otherProducts}</div>
          <div className="infobox-use"><h2 className="infobox__bold">Využívá se k:</h2> {selectedChemical.use}</div>
          <div className="infobox-specs"><h2 className="infobox__bold">Jak vypadá: </h2>{selectedChemical.specification}</div>
          <div className="infobox-warnings">{selectedChemical.warningSign}</div>
        </div>
        {isMobile ? <div className="infobox__btn-center">
            <button className="infobox__btn" onClick={() => onClose(false)}>Zpět</button>
          </div> : null}
      </div>
    </div>
  );
};
