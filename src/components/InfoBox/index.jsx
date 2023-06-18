import React, { useState } from 'react';
import './style.css';
import { chemicals } from '../../chemicals';
import { isMobile } from 'react-device-detect';

export const InfoBox = ({ id, onClose }) => {
  const selectedChemical = chemicals.find((chemical) => chemical.id === id);

  console.log(selectedChemical.warningSign);

  return (
    <div className="infobox__overlay">
      <div
        className={
          isMobile ? 'infobox__container mobile' : 'infobox__container'
        }
      >
        <h2 className="infobox__heading">{selectedChemical.nameOfProduct}</h2>
        <div
          className={isMobile ? 'infobox__body' : 'infobox__body infobox__flex'}
        >
          <div>
            <div>
              <h2 className="infobox__bold">Název chemické sloučeniny:</h2>{' '}
              {selectedChemical.nameOfChemical}
            </div>
            <div>
              <h2 className="infobox__bold">Také v:</h2>{' '}
              {selectedChemical.otherProducts}
            </div>
            <div>
              <h2 className="infobox__bold">Využívá se k:</h2>{' '}
              {selectedChemical.use}
            </div>
            <div>
              <h2 className="infobox__bold">Jak vypadá: </h2>
              {selectedChemical.specification}
            </div>
            {selectedChemical.warningSign.map((sign) => (
              <img src={sign.url} alt={sign.id} className="infobox__warn" />
            ))}
          </div>
          {!isMobile ? (
            <img className="infobox__icon" src={selectedChemical.url} />
          ) : null}
        </div>
        <div className="infobox__btn-center">
          <button className="infobox__btn" onClick={() => onClose(false)}>
            Zpět
          </button>
        </div>
      </div>
    </div>
  );
};
