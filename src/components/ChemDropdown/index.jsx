import React, { useState } from "react";
import "./style.css";
import { MixResult } from "../MixResult";
import { DropdownPicker } from "./DropdownPicker";

export const ChemDropdown = () => {
  const [select1, setSelect1] = useState();
  const [select2, setSelect2] = useState();
  const [mix, setMix] = useState(false);

  const handleClick = () => {
    setMix(!mix);
  };

  const handleMix = () => {
    setSelect1();
    setSelect2();
    setMix(!mix);
  };

  return (
    <>
      <DropdownPicker
        selectForDisabled={select2}
        selectMain={select1}
        onSelect={setSelect1}
        order="první"
      />
      <DropdownPicker
        selectForDisabled={select1}
        selectMain={select2}
        onSelect={setSelect2}
        order="druhou"
      />
      <div className="chemdropdown__button">
        <button
          className="btn"
          disabled={select1 && select2 ? false : true}
          onClick={handleClick}
        >
          Míchat
        </button>
      </div>
      {mix && select1 && select2 ? (
        <MixResult
          chemicalID1={select1}
          chemicalID2={select2}
          handleClick={handleMix}
        />
      ) : null}
    </>
  );
};
