import React from 'react';
import './style.css';
import { chemicals } from '../../chemicals';

export const Chemical = ({
  id,
  url,
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onDragStart,
  mixList,
  positionY,
  positionX,
  openInfoBox,
}) => {
  const handleClick = (id) => {
    openInfoBox(id);
  };

  const selectedChemical = chemicals.find((chemical) => chemical.id === id);

  return (
    <div
      draggable
      onClick={() => handleClick(id)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onDragStart={onDragStart}
      className={mixList.includes(id) ? 'chemical disabled' : 'chemical'}
      style={{
        position: 'absolute',
        transform: `translate(${positionY}px, ${positionX}px )`,
      }}
    >
      <img
        src={url}
        alt={id}
        title={selectedChemical.nameOfProduct}
        className="chemical__logo"
      />
    </div>
  );
};
