import React, { useState, useRef, useLayoutEffect } from "react";
import "./style.css";
import { chemicals } from "../../chemicals";
import { Chemical } from "../Chemical";
import { MixCircle } from "../MixCircle";
import { MixResult } from "../MixResult";
import { InfoBox } from "../InfoBox";

export const ChemCircle = () => {
  const [draggedElement, setDraggedElement] = useState();
  const [mixCircleList, setMixCircleList] = useState([]);
  const [position, setPosition] = useState([]);
  const [width, setWidth] = useState(0);
  const [infoBox, setInfoBox] = useState(false);
  const [selectedChemicalId, setSelectedChemicalId] = useState();

  const handleOnTouchStart = (id) => {
    if (mixCircleList.includes(draggedElement) === false) {
      setDraggedElement(id);
    }
  };

  const handleOnDragStart = (id) => {
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
      event.changedTouches[0].pageY
    );
    if (finalPosition.classList.value === "mixCircle") {
      setMixCircleList((prevValue) => [...prevValue, draggedElement]);
    }
    setDraggedElement();
    setPosition([]);
  };

  const handleOnDrop = () => {
    setMixCircleList((prevValue) => [...prevValue, draggedElement]);
    setDraggedElement();
  };
  const handleOnDragOver = (evt) => {
    evt.preventDefault();
  };

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  const getRadius = (r, delta, index) => {
    return r + delta * 40 - delta + 5 * (index % 2);
  };

  const ref = useRef(null);
  const numberOfChemicals = chemicals.length;
  const viewX = 300;
  const viewY = width / 2;

  const deleteChems = () => {
    setMixCircleList([]);
  };

  const handleOpenInfobox = (id) => {
    setSelectedChemicalId(id);
    setInfoBox(true);
  };

  const handleCloseInfoBox = (close) => {
    setInfoBox(close);
  };

  return (
    <div className="chem__circle" ref={ref}>
      <div className="chem__circle-chemicals">
        {chemicals.map((chemical, index) => {
          const angle = (2 * Math.PI * (index + 0.5)) / numberOfChemicals;
          const radius = getRadius(width / 7, 5, index);
          const x = radius * Math.cos(angle) + viewX;
          const y = radius * Math.sin(angle) + viewY;

          return (
            <>
              <Chemical
                key={chemical.id}
                id={chemical.id}
                url={chemical.url}
                mixList={mixCircleList}
                openInfoBox={handleOpenInfobox}
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
                positionX={x}
                positionY={y}
              />
            </>
          );
        })}
        {position.length > 0 && (
          <img
            style={{
              position: "absolute",
              width: "50px",
              height: "50px",
              top: position[1] + 10,
              left: position[0] + 10,
            }}
            src={
              chemicals.find((chemical) => chemical.id === draggedElement).url
            }
          />
        )}
        <MixCircle
          className="chem__circle-mix"
          disabled={mixCircleList.length === 2 ? true : false}
          mixList={mixCircleList}
          onDrop={handleOnDrop}
          onDragOver={handleOnDragOver}
          positionX={viewX}
          positionY={viewY}
        />
      </div>
      {mixCircleList.length === 2 && (
        <MixResult
          chemicalID1={mixCircleList[0]}
          chemicalID2={mixCircleList[1]}
          handleClick={deleteChems}
        />
      )}
      {infoBox ? (
        <InfoBox id={selectedChemicalId} onClose={handleCloseInfoBox} />
      ) : null}
    </div>
  );
};
