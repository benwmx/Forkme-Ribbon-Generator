import SwitchButton from "@/components/SwitchButton";
import { useState } from "react";
import { useRibbonStyleStore } from "@/store";

const AlignmentPosition = () => {
  const alignment = useRibbonStyleStore((state) => state.alignment);
  const verticalPosition = useRibbonStyleStore(
    (state) => state.verticalPosition
  );
  const setAlignment = useRibbonStyleStore((state) => state.setAlignment);
  const setVerticalPosition = useRibbonStyleStore(
    (state) => state.setVerticalPosition
  );
  const handleAlignment = () => {
    const newAlignment = alignment === "right" ? "left" : "right";
    setAlignment(newAlignment);
  };
  const handleVerticalPosition = () => {
    const newPostion = verticalPosition === "absolute" ? "fixed" : "absolute";
    setVerticalPosition(newPostion);
  };
  return (
    <>
      <div className="alignmentSection">
        <span>Alignment</span>
        <p>Left</p>

        <SwitchButton
          handleToggle={handleAlignment}
          isOn={alignment === "left" ? false : true}
          onBgColor="green"
          onBtnColor="white"
          offBgColor="red"
          offBtnColor="black"
          id={"alignment"}
        />
        <p>Right</p>
      </div>
      <div className="positionSection">
        <span>Vertical Position</span>
        <p>Top</p>
        <SwitchButton
          handleToggle={handleVerticalPosition}
          isOn={verticalPosition === "absolute" ? false : true}
          onBgColor="green"
          onBtnColor="white"
          offBgColor="red"
          offBtnColor="black"
          id={"position"}
        />
        <p>Sticky</p>
      </div>
    </>
  );
};

export default AlignmentPosition;
