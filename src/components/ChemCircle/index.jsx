import React, { useState } from 'react';
import './style.css';
import { chemicals } from '../../chemicals';
import { Chemical } from '../Chemical';
import { MixCircle } from '../MixCircle';

export const ChemCircle = () => {
  const [draggedElement, setDraggedElement] = useState();

  const handleOnTouchStart = (id) => {
    setDraggedElement(id);
  };

  const handleOnTouchMove = (event) => {
    const positionX = event.touches[0].pageX;
    const positionY = event.touches[0].pageY;
  };

  const handleOnTouchEnd = (event) => {
    const finalPosition = document.elementFromPoint(
      event.changedTouches[0].pageX,
      event.changedTouches[0].pageY,
    );
    if (finalPosition.classList.value === 'mixCircle') {
      console.log(finalPosition);
    }
  };

  return (
    <>
      {chemicals.map((chemical) => (
        <Chemical
          key={chemical.id}
          id={chemical.id}
          url={chemical.url}
          name={chemical.nameOfProduct}
          chemical={chemical.nameOfChemical}
          products={chemical.otherProducts}
          use={chemical.use}
          specs={chemical.specification}
          warnings={chemical.warningSign}
          onTouchStart={() => {
            handleOnTouchStart(chemical.id);
          }}
          onTouchMove={(event) => {
            handleOnTouchMove(event);
          }}
          onTouchEnd={(event) => {
            handleOnTouchEnd(event);
          }}
        />
      ))}
      <MixCircle />
    </>
  );
};
