import React, { useState } from "react";
import "./style.css";
import { chemicals } from "../../chemicals";

export const MixCircle = ({
  disabled,
  mixList,
  onDrop,
  onDragOver,
  positionX,
  positionY,
}) => {
  return (
    <>
      <div
        className={disabled ? "mixCircle chemical__disabled" : "mixCircle"}
        style={{
          position: "absolute",
          top: `calc(${positionX}px - 40px)`,
          left: `calc(${positionY}px - 75px)`,
        }}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {mixList
          ? mixList.map((element) => (
              <img
                key={element}
                className="chemical__mini"
                src={
                  chemicals.find((chemical) => chemical.id === element).alturl
                }
              />
            ))
          : null}
      </div>
    </>
  );
};
