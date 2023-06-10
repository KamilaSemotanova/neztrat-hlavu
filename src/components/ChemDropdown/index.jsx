import React from 'react';
import './style.css';

export const ChemDropdown = () => {
  return (
    <div className="seznam-chemikalii">
      <div className="seznam-chemikálii-body">
        <form className="seznam-chemikalii-form">
          <label>
            <div className="seznam-chemikalii-label">
              Vyberte první chemikálii:
            </div>
            <select>
              <option value="">Vyberte</option>
              <option value="savo">Savo</option>
              <option value="ocet">Ocet</option>
              <option value="krtek">Krtek</option>
              <option value="voda">Voda</option>
              <option value="okena">Okena</option>
              <option value="peroxid">Peroxid vodíku</option>
              <option value="odlakovac">Odlakovač</option>
              <option value="sanytol">Sanytol</option>
            </select>
          </label>
          <label>
            <div className="seznam-chemikalii-label">
              Vyberte druhou chemikálii:
            </div>
            <select>
              <option value="">Vyberte</option>
              <option value="savo">Savo</option>
              <option value="ocet">Ocet</option>
              <option value="krtek">Krtek</option>
              <option value="voda">Voda</option>
              <option value="okena">Okena</option>
              <option value="peroxid">Peroxid vodíku</option>
              <option value="odlakovac">Odlakovač</option>
              <option value="sanytol">Sanytol</option>
            </select>
          </label>
            <div className="seznam-chemikalii-controls">
                <button className="btn" type="submit">Míchat</button>
            </div>
        </form>
      </div>
    </div>
  );
};
