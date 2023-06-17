import React, { useState, useEffect } from "react";
import { isMobile } from "react-device-detect";
import { reactionResult } from "./reactions";
import "./style.css";
import icon from "../../img/icon.gif";
import { funfacts } from "./funfacts";
import { chemicals } from "../../chemicals";

export const MixResult = ({ chemicalID1, chemicalID2, handleClick }) => {
  const [randomFact, setRandomFact] = useState("");

  const chem1 = chemicals.find((chemical) => chemical.id === chemicalID1);
  const chem2 = chemicals.find((chemical) => chemical.id === chemicalID2);

  const reactionID =
    chemicalID1.localeCompare(chemicalID2) < 0
      ? chemicalID1 + chemicalID2
      : chemicalID2 + chemicalID1;

  const reaction = reactionResult[reactionID];

  useEffect(() => {
    const randomNumber = Math.floor(Math.random() * funfacts.length);

    setRandomFact(funfacts[randomNumber]);
  }, [chemicalID1 && chemicalID2]);

  return (
    <div
      className={
        isMobile
          ? "mixresult__overlay mobile-mixresult__overlay"
          : "mixresult__overlay"
      }
    >
      <div
        className={
          isMobile
            ? "mixresult__container mobile-mixresult__container"
            : "mixresult__container"
        }
      >
        {reaction.title ? (
          <>
            <h3 className="mixresult__heading">
              <img className="mixresult__icon" src={icon} />
              {reaction.title}
            </h3>
            <div className={!isMobile ? "mixresult__flex" : null}>
              <div className="mixresult__body--reaction">
                <p>{reaction.reaction}</p>
                <p>{reaction.resultInfo}</p>
              </div>
              <div className="mixresult__combo">
                <img className="mixresult_img" src={chem1.url} />
                <img className="mixresult_img" src={chem2.url} />
              </div>
            </div>
          </>
        ) : (
          <p className="mixresult__body--nothing">{randomFact}</p>
        )}
        <div className="mixresult__btn-center">
          <button className="mixresult__btn" onClick={() => handleClick()}>
            Zpět
          </button>
        </div>
      </div>
    </div>
  );
};
