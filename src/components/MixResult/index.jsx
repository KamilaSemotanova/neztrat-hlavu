            import React from "react";
            import { isMobile } from 'react-device-detect';
            import { reactionResult } from "./reactions";
            import "./style.css"

            export const MixResult = ({chemicalID1, chemicalID2}) => {
              const reactionID = chemicalID1.localeCompare(chemicalID2) < 0 ? chemicalID1+chemicalID2 : chemicalID2+chemicalID1

              const reaction = reactionResult[reactionID]

              return (
                <div className={isMobile ? "mixresult__overlay mobile-mixresult__overlay" : "mixresult__overlay"}>
                    <div className={isMobile ? "mixresult__container mobile-mixresult__container" : "mixresult__container"}>
                  <h3 className="mixresult__heading">{reaction.title}</h3>
                        <div className="mixresult__body">
                  <p>{reaction.reaction}</p>
                  <p>{reaction.resultInfo}</p>
                        </div>
                        <div className="mixresult__btn-center">
                        <button className="mixresult__btn">Zpět</button>
                        </div>
                    </div>
                </div>
              );
            };
