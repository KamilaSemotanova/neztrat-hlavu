import React, { useState } from 'react';
import './style.css';
import {chemicals} from "../../../chemicals";
import {InfoBox} from "../../InfoBox";

export const DropdownPicker = ({selectForDisabled, onSelect, order}) => {
    const [open, setOpen]  = useState(false);
    const [chemicalUrl, setChemicalUrl] = useState();
    const [chemicalId, setChemicalId] = useState();
    const [chemicalInfo, setChemicalInfo] = useState();
    const [infoboxToggle, setInfoboxToggle] = useState(false);

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
        setChemicalId();
    }
    const handleOpenInfoBox = () => {
        const selectedChemical = chemicals.find(
            (chemical) => chemical.id === chemicalId,
        );
        setChemicalInfo(selectedChemical);
        setInfoboxToggle(true)
    };

    const handleCloseInfoBox = () => {
        setInfoboxToggle(false)
    }

    return (
        <>
            <div className={open ? "dropdown active" : "dropdown"} onClick={handleOpen}>Vyberte {order} chemikálii: <span className="arrow"></span></div>
            <div className="dropdown__results container">
                {chemicalUrl ? <img className="dropdown__icon dropdown__img" src={chemicalUrl} />: null}
                {chemicalId ? <button
            className="dropdown__btn"
            type="button"
            onClick={handleOpenInfoBox}
        >
            ?
                </button> : null}
            </div>
            {open ? (
                <div className="dropdown__grid container">
                    <div className="dropdown__grid-button" value="">
                        <span className="arrow" onClick={handleOpen}></span>
                    </div>
                    {chemicals.map((chemical) => (
                        <div className={selectForDisabled === chemical.id ? "dropdown__grid-button disabled" : "dropdown__grid-button"}
                             key={chemical.id}
                             value={chemical.id}
                             onClick={() => handleClick(chemical.id)}
                        >
                            <img className="dropdown__icon" src={chemical.url} />
                            <div>{chemical.nameOfProduct}</div>
                        </div>
                    ))}
                </div>
            ) : null}
            {chemicalInfo && (
                <InfoBox
                    id={chemicalInfo.id}
                    onClose={handleCloseInfoBox}
                />
            )}
        </>
    )

}