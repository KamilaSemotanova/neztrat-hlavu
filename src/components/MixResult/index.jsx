            import React from "react";
            import { isMobile } from 'react-device-detect';
            import { reactionResult } from "./reactions";
            import "./style.css"
            import icon from "../../img/icon.gif";

            export const MixResult = ({chemicalID1, chemicalID2, handleClick}) => {
              const reactionID = chemicalID1.localeCompare(chemicalID2) < 0 ? chemicalID1+chemicalID2 : chemicalID2+chemicalID1

              const reaction = reactionResult[reactionID]

              return (
                <div className={isMobile ? "mixresult__overlay mobile-mixresult__overlay" : "mixresult__overlay"}>
                    <div className={isMobile ? "mixresult__container mobile-mixresult__container" : "mixresult__container"}>
                  <h3 className="mixresult__heading"><img className="mixresult__icon" src={icon}/>{reaction.title}</h3>
                        <div className="mixresult__body">
                  <p>{reaction.reaction}</p>
                  <p>{reaction.resultInfo}</p>
                        </div>
                        <div className="mixresult__btn-center">
                        <button className="mixresult__btn" onClick={() => handleClick()}>Zpět</button>
                        </div>
                    </div>
                </div>
              );
            };
