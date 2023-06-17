import React, { useState } from 'react';
import './style.css';
import { InfoBox } from '../InfoBox';

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
      className={mixList.includes(id) ? 'chemical disabled' : 'chemical'}
      style={{
        position: 'absolute',
        transform: `translate(${positionY}px, ${positionX}px )`,
      }}
    >
      <img src={url} alt={id} className="chemical__logo" />
      {openInfoBox && <InfoBox id={id} onClose={setOpenInfoBox}/>}
    </div>
  );
};
