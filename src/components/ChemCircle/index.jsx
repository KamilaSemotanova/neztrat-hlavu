import React, { useState } from 'react';
import './style.css';
import { chemicals } from '../../chemicals';
import { Chemical } from '../Chemical';

export const ChemCircle = () => {
  return chemicals.map((chemical) => (
    <Chemical
      key={chemical.id}
      id={chemical.id}
      url={chemical.url}
      name={chemical.nameOfProduct}
      chemical={chemical.nameOfChemical}
      products={chemical.otherProducts}
      use={chemical.use}
      specs={chemical.specification}
      warnings={chemical.warningSign}
    />
  ));
};
