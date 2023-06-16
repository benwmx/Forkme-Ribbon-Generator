import { useRibbonStyleStore } from "@/store";
import styles from "@/styles/ColorsController.module.css";
import { useEffect, useRef, useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";

const ColorsController = () => {
  const [activeButton, setActiveButton] = useState(null);
  const ref = useRef();
  const [color, setColor] = useState("#c122");
  const buttons = [
    {
      name: "ribbonColor",
      buttonText: "Ribbon",
      setterFunction: useRibbonStyleStore((state) => state.setRibbonColor),
    },
    {
      name: "ribbonHoverColor",
      buttonText: "Ribbon Hover",
      setterFunction: useRibbonStyleStore((state) => state.setRibbonHoverColor),
    },
    {
      name: "textColor",
      buttonText: "Text",
      setterFunction: useRibbonStyleStore((state) => state.setTextColor),
    },
    {
      name: "textHoverColor",
      buttonText: "Text Hover",
      setterFunction: useRibbonStyleStore((state) => state.setTextHoverColor),
    },
    {
      name: "linesColor",
      buttonText: "Lines",
      setterFunction: useRibbonStyleStore((state) => state.setLinesColor),
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
      <div className={styles.colorpicker}>
        <HexColorPicker color={color} onChange={handleColorSetting} />
        <HexColorInput
          color={color}
          onChange={handleColorSetting}
          className={styles.colorInput}
        />
      </div>
    </div>
  );
};

export default ColorsController;
