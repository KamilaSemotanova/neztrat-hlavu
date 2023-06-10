import React, { useState } from 'react';
import './style.css';
import { InfoBox } from '../InfoBox';

export const Chemical = ({id, url, name, chemical, products, use, specs, warnings }) => {
  const[openInfoBox, setOpenInfoBox]= useState(false) 
  
  const handleClick = () => {
  setOpenInfoBox(!openInfoBox)
  }

  return (
    <div onClick={handleClick} >
      <img src={url} alt="product picture" className='chemical' />
      {openInfoBox && <InfoBox id={id} name={name} chemical={chemical} products={products} use={use} specs={specs} warnings={warnings}/>}
    </div>
  )
}
