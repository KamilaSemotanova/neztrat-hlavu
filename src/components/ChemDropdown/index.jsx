import React, {useState} from 'react';
import './style.css';

export const ChemDropdown = () => {
  const [select1, setSelect1] = useState("");
  const [select2, setSelect2] = useState("");
  const handleClick = (evt) => {
    evt.preventDefault();
    console.log(select1);
    console.log(select2)
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
              <option value="savo" disabled={(select2==="savo") ? true : false}>Savo</option>
              <option value="ocet" disabled={(select2==="ocet") ? true : false}>Ocet</option>
              <option value="krtek" disabled={(select2==="krtek") ? true : false}>Krtek</option>
              <option value="voda" disabled={(select2==="voda") ? true : false}>Voda</option>
              <option value="okena" disabled={(select2==="okena") ? true : false}>Okena</option>
              <option value="peroxid" disabled={(select2==="peroxid") ? true : false}>Peroxid vodíku</option>
              <option value="odlakovac" disabled={(select2==="odlakovac") ? true : false}>Odlakovač</option>
              <option value="sanytol" disabled={(select2==="sanytol") ? true : false}>Sanytol</option>
            </select>
            <button className="btn" onClick={handleClick}>?</button>
          </label>
          <label>
            <div className="seznam-chemikalii-label">
              Vyberte druhou chemikálii:
            </div>
            <select onChange={(evt) => setSelect2(evt.target.value)}>
              <option value="">Vyberte</option>
              <option value="savo" disabled={(select1==="savo") ? true : false}>Savo</option>
              <option value="ocet" disabled={(select1==="ocet") ? true : false}>Ocet</option>
              <option value="krtek" disabled={(select1==="krtek") ? true : false}>Krtek</option>
              <option value="voda" disabled={(select1==="voda") ? true : false}>Voda</option>
              <option value="okena" disabled={(select1==="okena") ? true : false}>Okena</option>
              <option value="peroxid" disabled={(select1==="peroxid") ? true : false}>Peroxid vodíku</option>
              <option value="odlakovac" disabled={(select1==="odlakovac") ? true : false}>Odlakovač</option>
              <option value="sanytol" disabled={(select1==="sanytol") ? true : false}>Sanytol</option>
            </select>
            <button className="btn" onClick={handleClick}>?</button>
          </label>
            <div className="seznam-chemikalii-controls">
                <button className="btn" type="submit">Míchat</button>
            </div>
        </form>
      </div>
    </div>
  );
};
