import React from "react";
import styles from "@/styles/SwitchButton.module.css";

const SwitchButton = ({
  isOn,
  handleToggle,
  onBgColor,
  offBgColor,
  onBtnColor,
  offBtnColor,
  id,
}) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className={styles.switchCheckbox}
        id={id}
        type="checkbox"
      />
      <label
        className={styles.switchLabel}
        htmlFor={id}
        style={{ background: isOn ? onBgColor : offBgColor }}
      >
        <span
          className={styles.switchButton}
          style={{ backgroundColor: isOn ? onBtnColor : offBtnColor }}
        />
      </label>
    </>
  );
};

export default SwitchButton;
