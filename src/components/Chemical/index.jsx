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
  onDragStart,
    mixList,
}) => {
  const [openInfoBox, setOpenInfoBox] = useState(false);

  const handleClick = () => {
    setOpenInfoBox(!openInfoBox);
  };

  return (
    <div
      draggable
      onClick={handleClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onDragStart={onDragStart}
      className={mixList.includes(id) ? "chemical disabled" : "chemical"}

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
