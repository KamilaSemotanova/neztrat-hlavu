import React, { useState } from 'react';
import './style.css';
import { InfoBox } from '../InfoBox';

export const Chemical = ({
  id,
  url,
  name,
  chemical,
  products,
  use,
  specs,
  warnings,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  positionY,
  positionX,
}) => {
  const [openInfoBox, setOpenInfoBox] = useState(false);

  const handleClick = () => {
    setOpenInfoBox(!openInfoBox);
  };

  // console.log(positionX);

  return (
    <div
      onClick={handleClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="chemical"
      style={{
        position: 'absolute',
        transform: `translate(${positionY}px, ${positionX}px )`,
      }}
    >
      <img src={url} alt="product picture" className="chemicalLogo" />
      {openInfoBox && (
        <InfoBox
          id={id}
          name={name}
          chemical={chemical}
          products={products}
          use={use}
          specs={specs}
          warnings={warnings}
        />
      )}
    </div>
  );
};
