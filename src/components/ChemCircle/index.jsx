import React, { useState } from 'react';
import './style.css';
import { chemicals } from '../../chemicals';
import { Chemical } from '../Chemical';
import { MixCircle } from '../MixCircle';
import { MixResult } from '../MixResult';

export const ChemCircle = () => {
  const [draggedElement, setDraggedElement] = useState();
  const [mixCircleList, setMixCircleList] = useState([]);
  const [position, setPosition] = useState([]);

  const handleOnTouchStart = (id) => {
    if (mixCircleList.includes(draggedElement) === false) {
      setDraggedElement(id);
    }
  };
  const handleOnDragStart = (id) => {
    if (mixCircleList.includes(draggedElement) === false) {
      setDraggedElement(id)
      console.log(id)
    }
  }
  const handleOnTouchMove = (event) => {
    if (mixCircleList.includes(draggedElement) === false) {
      const positionX = event.touches[0].pageX;
      const positionY = event.touches[0].pageY;

      setPosition([positionX, positionY]);
    }
  };

  const handleOnTouchEnd = (event) => {
    const finalPosition = document.elementFromPoint(
      event.changedTouches[0].pageX,
      event.changedTouches[0].pageY,
    );
    if (finalPosition.classList.value === 'mixCircle') {
      setMixCircleList((prevValue) => [...prevValue, draggedElement]);
    }
    setDraggedElement();
    setPosition([]);
  };

  const handleOnDrop = () => {
    setMixCircleList((prevValue) => [...prevValue, draggedElement]);
    setDraggedElement();
  }
  const handleOnDragOver = (evt) => {
    evt.preventDefault()
  }

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
          mixList={mixCircleList}
          onTouchStart={() => {
            handleOnTouchStart(chemical.id);
          }}
          onDragStart={() => handleOnDragStart(chemical.id)}
          onTouchMove={(event) => {
            handleOnTouchMove(event);
          }}
          onTouchEnd={(event) => {
            handleOnTouchEnd(event);
          }}
        />
      ))}
      {position.length > 0 && (
        <img
          style={{
            position: 'absolute',
            width: '50px',
            height: '50px',
            top: position[1] + 10,
            left: position[0] + 10,
          }}
          src={chemicals.find((chemical) => chemical.id === draggedElement).url}
        />
      )}
      <MixCircle mixList={mixCircleList} onDrop={handleOnDrop} onDragOver={handleOnDragOver} />
      {mixCircleList.length === 2 && (
        <MixResult
          chemicalID1={mixCircleList[0]}
          chemicalID2={mixCircleList[1]}
        />
      )}
    </>
  );
};
