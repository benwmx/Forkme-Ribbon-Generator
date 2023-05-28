import styles from "@/styles/RadioButton.module.css";
import { useState } from "react";

const RadioButton = ({ value }) => {
  const [checked, setCheck] = useState(false);
  const handleClick = () => {
    setCheck((prevState) => !prevState);
  };

  return (
    <label>
      <input
        type="radio"
        value={value}
        onChange={handleClick}
        className={styles.radio}
        checked={checked}
      />
      {value}
    </label>
  );
};
export default RadioButton;
