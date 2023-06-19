import { useRibbonStyleStore } from "@/store";
import styles from "@/styles/ColorsController.module.css";
import { useEffect, useRef, useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

const ColorsController = () => {
  const [activeButton, setActiveButton] = useState(null);
  const ref = useRef();
  const [color, setColor] = useState("#aaa");
  const {
    setRibbonColor,
    setRibbonHoverColor,
    setTextColor,
    setTextHoverColor,
    setLinesColor,
  } = useRibbonStyleStore();
  const buttons = [
    {
      name: "ribbonColor",
      buttonText: "Ribbon",
      setterFunction: setRibbonColor,
    },
    {
      name: "ribbonHoverColor",
      buttonText: "Ribbon Hover",
      setterFunction: setRibbonHoverColor,
    },
    {
      name: "textColor",
      buttonText: "Text",
      setterFunction: setTextColor,
    },
    {
      name: "textHoverColor",
      buttonText: "Text Hover",
      setterFunction: setTextHoverColor,
    },
    {
      name: "linesColor",
      buttonText: "Lines",
      setterFunction: setLinesColor,
    },
  ];
  const handleClick = (event) => {
    setActiveButton(event.target.name);
  };

  const handleColorSetting = (color) => {
    setColor(color);
    buttons.forEach((button) => {
      if (button.name === activeButton) button.setterFunction(color);
    });
  };
  useEffect(() => {
    const handler = (event) => {
      if (!ref.current.contains(event.target)) setActiveButton(null);
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.buttonsContainer}>
        {buttons.map((button) => (
          <button
            className={
              activeButton === button.name ? styles.activeButton : styles.button
            }
            key={button.name}
            name={button.name}
            onClick={(event) => handleClick(event)}
          >
            {button.buttonText}
          </button>
        ))}
      </div>
      <div className={styles.colorPicker}>
        <HexColorPicker color={color} onChange={handleColorSetting} />
        <HexColorInput
          color={color}
          onChange={handleColorSetting}
          className={styles.colorInput}
          style={{
            backgroundColor: "#424855",
            color: "white",
            border: "1px solid #ede9e3",
            borderRadius: "5px",
            marginTop: "20px",
            width: "95%",
          }}
        />
      </div>
    </div>
  );
};

export default ColorsController;
