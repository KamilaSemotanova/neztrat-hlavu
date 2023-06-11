import React, { useState } from 'react';
import './style.css';
import {chemicals} from "../../../chemicals";
import {InfoBox} from "../../InfoBox";
import {MixResult} from "../../MixResult";

export const DropdownPicker = ({selectForDisabled, onSelect}) => {
    const [open, setOpen]  = useState(false);
    const [chemicalUrl, setChemicalUrl] = useState();
    const [chemicalId, setChemicalId] = useState();
    const [chemicalInfo, setChemicalInfo] = useState();

    const handleClick = (id) => {
        onSelect(id)
        setChemicalId(id)
        setOpen(!open)
        const selectedChemical = (chemicals.find((chemical) => chemical.id === id));
        setChemicalUrl(selectedChemical.url);
    }

    const handleOpen = () => {
        setOpen(!open);
        setChemicalUrl();
    }
    const handleOpenInfoBox = () => {
        const selectedChemical = chemicals.find(
            (chemical) => chemical.id === chemicalId,
        );
        setChemicalInfo(selectedChemical);
        console.log(selectedChemical);
    };

    return (
        <>
            <div onClick={handleOpen}>Vyberte první chemikálii:</div>
            {chemicalUrl ? <img className="dropdown__img" src={chemicalUrl} /> : null}
            <button
            className="btn"
            type="button"
            disabled={chemicalId ? false : true}
            onClick={handleOpenInfoBox}
        >
            ?
        </button>
            {open ? (
                <div className="chembox__grid container">
                    <div className="chembox__button" value="">
                        <img
                            className="chembox__icon"
                            src={require('../../../img/rocket.svg')}
                        />
                    </div>
                    {chemicals.map((chemical) => (
                        <div className={selectForDisabled === chemical.id ? "chembox__button disabled" : "chembox__button"}
                             key={chemical.id}
                             value={chemical.id}
                             onClick={() => handleClick(chemical.id)}
                        >
                            <img className="chembox__icon" src={chemical.url} />
                            <div>{chemical.id}</div>
                        </div>
                    ))}
                </div>
            ) : null}
            {chemicalInfo && (
                <InfoBox
                    name={chemicalInfo.nameOfProduct}
                    chemical={chemicalInfo.nameOfChemical}
                    products={chemicalInfo.otherProducts}
                    use={chemicalInfo.use}
                    specs={chemicalInfo.specification}
                    warning={chemicalInfo.warningSign}
                />
            )}
        </>
    )

}