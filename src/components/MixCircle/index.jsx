import React, { useState } from 'react';
import './style.css';
import { chemicals } from '../../chemicals';
import { MixResult } from '../MixResult';

export const MixCircle = ({
  disabled,
  mixList,
  onDrop,
  onDragOver,
  positionX,
  positionY,
}) => {
  console.log(mixList);

  return (
    <>
      <div
        className={disabled ? 'mixCircle chemical__disabled' : 'mixCircle'}
        style={{
          position: 'absolute',
          top: `calc(${positionX}px - 70px)`,
          left: `calc(${positionY}px - 85px)`,
        }}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {mixList
          ? mixList.map((element) => (
              <img
                className="chemical__mini"
                src={chemicals.find((chemical) => chemical.id === element).url}
              />
            ))
          : null}
      </div>
    </>
  );
};
