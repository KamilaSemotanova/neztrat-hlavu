import React from "react";
import "./style.css";


export const InfoBox = ({name, chemical, products, use, specs, warnings}) => {
    return (
        <div className="infobox__container container">
            <h2 className="infobox__heading">{name}</h2>
            <div className="infobox-body">
                <div className="infobox-chemical">{chemical}</div>
                <div className="infobox-other">{products}</div>
                <div className="infobox-use">{use}</div>
                <div className="infobox-specs">{specs}</div>
                <div className="infobox-warnings">{warnings}</div>
            </div>
        </div>
    )
}