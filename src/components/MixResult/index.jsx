import React from "react";
import { reactionResult } from "./reactions";

export const MixResult = ({chemicalID1, chemicalID2}) => {
  const reactionID = chemicalID1.localeCompare(chemicalID2) < 0 ? chemicalID1+chemicalID2 : chemicalID2+chemicalID1

  const reaction = reactionResult[reactionID]

  return (
    <div className="reactionResult">
      <h3>{reaction.title}</h3>
      <p>{reaction.reaction}</p>
      <p>{reaction.resultInfo}</p>
    </div>
  );
};
