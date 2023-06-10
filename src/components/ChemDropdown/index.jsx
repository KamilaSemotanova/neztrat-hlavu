import React, {useState} from 'react';
import './style.css';
import {chemicals} from "../../chemicals";
import {InfoBox} from "../InfoBox";


export const ChemDropdown = () => {
  const [select1, setSelect1] = useState();
  const [select2, setSelect2] = useState();
  const [chemicalInfo, setChemicalInfo] = useState();
  const handleOpenInfoBox = (select) => {
    const selectedId = select==="select1" ? select1 : select2;
    const selectedChemical = chemicals.find((chemical) => chemical.id===selectedId);
    setChemicalInfo(selectedChemical);
    console.log(selectedChemical)
  }

  return (
    <div className="seznam-chemikalii">
      <div className="seznam-chemikálii-body">
        <form className="seznam-chemikalii-form">
          <label>
            <div className="seznam-chemikalii-label">
              Vyberte první chemikálii:
            </div>
            <select onChange={(evt) => setSelect1(evt.target.value)}>
              <option value="">Vyberte</option>
              {chemicals.map((chemical) => <option key={chemical.id} value={chemical.id} disabled={select2===chemical.id ? true : false}>{chemical.nameOfProduct}</option>)};
            </select>
            <button className="btn" type="button" disabled={select1 ? false : true} onClick={() => handleOpenInfoBox("select1")}>?</button>
          </label>
          <label>
            <div className="seznam-chemikalii-label">
              Vyberte druhou chemikálii:
            </div>
            <select onChange={(evt) => setSelect2(evt.target.value)}>
              <option value="">Vyberte</option>
              {chemicals.map((chemical) => <option key={chemical.id} value={chemical.id} disabled={select1===chemical.id ? true : false}>{chemical.nameOfProduct}</option>)};
            </select>
            <button className="btn" type="button" disabled={select2 ? false : true} onClick={() => handleOpenInfoBox("select2")}>?</button>
          </label>
            <div className="seznam-chemikalii-controls">
                <button className="btn" type="submit">Míchat</button>
            </div>
        </form>
      </div>
      {chemicalInfo && <InfoBox name={chemicalInfo.nameOfProduct} chemical={chemicalInfo.nameOfChemical} products={chemicalInfo.otherProducts} use={chemicalInfo.use} specs={chemicalInfo.specification} warning={chemicalInfo.warningSign}/> }
    </div>
  );
};
