import React, { useState, useRef, useLayoutEffect } from 'react';
import '../style.css';
import { chemicals } from '../../../chemicals';
import { Chemical } from '../../Chemical';
import { MixCircle } from '../../MixCircle';
import { MixResult } from '../../MixResult';

export const ChemCircle = () => {
  const [draggedElement, setDraggedElement] = useState();
  const [mixCircleList, setMixCircleList] = useState([]);
  const [position, setPosition] = useState([]);
  const [width, setWidth] = useState(0);

  const handleOnTouchStart = (id) => {
    if (mixCircleList.includes(draggedElement) === false) {
      setDraggedElement(id);
    }
  };

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

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  const getRadius = (r, delta, index) => {
    return r + Math.random() * delta * 2 - delta + 20 * (index % 2);
  };

  const ref = useRef(null);
  const numberOfChemicals = chemicals.length;
  const viewX = 300;
  const viewY = width / 2;

  return (
    <div ref={ref}>
      {chemicals.map((chemical, index) => {
        const angle = (2 * Math.PI * index) / numberOfChemicals;
        const radius = getRadius(width / 7, 5, index);
        const x = radius * Math.cos(angle) + viewX;
        const y = radius * Math.sin(angle) + viewY;

        return (
          <>
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
              positionX={x}
              positionY={y}
            />
          </>
        );
      })}
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
      <MixCircle mixList={mixCircleList} />
      {mixCircleList.length === 2 && (
        <MixResult
          chemicalID1={mixCircleList[0]}
          chemicalID2={mixCircleList[1]}
        />
      )}
    </div>
  );
};
