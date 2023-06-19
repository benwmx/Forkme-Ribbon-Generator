import RangeSlider from "@/components/RangeSlider";
import { useRibbonStyleStore } from "@/store";
import { RgbaColorPicker } from "react-colorful";
import styles from "@/styles/ShadowController.module.css";

const ShadowController = () => {
  const {
    shadowColor,
    shadowHorizontalOffset,
    shadowVerticalOffset,
    shadowBlurRadius,
    shadowSpreadRadius,
    setShadowColor,
    setShadowVerticalOffset,
    setShadowHorizontalOffset,
    setShadowBlurRadius,
    setShadowSpreadRadius,
  } = useRibbonStyleStore();

  const rangeSliders = [
    {
      label: "Horizontal Offset",
      setterFunction: setShadowHorizontalOffset,
      value: shadowHorizontalOffset,
      min: -20,
      max: 20,
    },
    {
      label: "Vertical Offset",
      setterFunction: setShadowVerticalOffset,
      value: shadowVerticalOffset,
      min: -20,
      max: 20,
    },
    {
      label: "Blur Radius",
      setterFunction: setShadowBlurRadius,
      value: shadowBlurRadius,
      min: 0,
      max: 20,
    },
    {
      label: "Spread Radius",
      setterFunction: setShadowSpreadRadius,
      value: shadowSpreadRadius,
      min: 0,
      max: 20,
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.rangeSliders}>
        {rangeSliders.map((rangeSlider) => (
          <RangeSlider
            label={rangeSlider.label}
            setFunction={rangeSlider.setterFunction}
            value={rangeSlider.value}
            min={rangeSlider.min}
            max={rangeSlider.max}
            key={rangeSlider.label}
          />
        ))}
      </div>
      <div>
        <RgbaColorPicker color={shadowColor} onChange={setShadowColor} />
      </div>
    </div>
  );
};
export default ShadowController;
