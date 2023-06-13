import React, { useState } from 'react';
import './style.css';
import { MixResult } from '../MixResult';
import {DropdownPicker} from "./DropdownPicker";

export const ChemDropdown = () => {
  const [select1, setSelect1] = useState();
  const [select2, setSelect2] = useState();
  const [mix, setMix] = useState(false);


  const handleClick = () => {
    setMix(!mix);
  };

  return (
      <>
      <DropdownPicker selectForDisabled={select2} onSelect={setSelect1} order="první" />
      <DropdownPicker selectForDisabled={select1} onSelect={setSelect2} order="druhou"/>
        <div><button className="btn" disabled={select1 && select2 ? false : true} onClick={handleClick}>Míchat</button></div>
        {mix ? <MixResult chemicalID1={select1} chemicalID2={select2} /> : null}
      </>
  )

}