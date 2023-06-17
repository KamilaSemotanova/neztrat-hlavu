import React, { useState } from "react";
import "./style.css";

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

  return (
    <div
      draggable
      onClick={() => handleClick(id)}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onDragStart={onDragStart}
      className={mixList.includes(id) ? "chemical disabled" : "chemical"}
      style={{
        position: "absolute",
        transform: `translate(${positionY}px, ${positionX}px )`,
      }}
    >
      <img src={url} alt={id} className="chemical__logo" />
    </div>
  );
};
