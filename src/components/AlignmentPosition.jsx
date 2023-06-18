import SwitchButton from "@/components/SwitchButton";
// import { useState } from "react";
import styles from "@/styles/AlignmentPosition.module.css";
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
      <div className={styles.container}>
        <span className={styles.title}>Alignment </span>
        <div className={styles.control}>
          <p className={styles.left}>Left</p>

          <SwitchButton
            handleToggle={handleAlignment}
            isOn={alignment === "left" ? false : true}
            onBgColor="#AC7769"
            onBtnColor="#EDE9E3"
            offBgColor="#54627b"
            offBtnColor="#EDE9E3"
            id={"alignment"}
          />
          <p className={styles.right}>Right</p>
        </div>
      </div>
      <div className={styles.container}>
        <span className={styles.title}>Vertical Position :</span>
        <div className={styles.control}>
          <p className={styles.top}>Top</p>
          <SwitchButton
            handleToggle={handleVerticalPosition}
            isOn={verticalPosition === "absolute" ? false : true}
            onBgColor="#1e9aa1"
            onBtnColor="#EDE9E3"
            offBgColor="#a5340f"
            offBtnColor="#EDE9E3"
            id={"position"}
          />
          <p className={styles.sticky}>Sticky</p>
        </div>
      </div>
    </>
  );
};

export default AlignmentPosition;
