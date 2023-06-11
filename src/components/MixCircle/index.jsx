import React, { useState } from 'react';
import './style.css';
import {chemicals} from "../../chemicals";
import { MixResult } from '../MixResult';

export const MixCircle = ({disabled, mixList, onDrop, onDragOver}) => {
  console.log(mixList);


  return (
    <>
      <div className={disabled ? "mixCircle chemical__disabled": "mixCircle"} onDrop={onDrop} onDragOver={onDragOver}>
        {mixList ? mixList.map((element) => <img className="chemical__mini" src={chemicals.find((chemical) => chemical.id === element).url} />) : null}
      </div>

    </>
  );
};
