import RangeSlider from "@/components/RangeSlider";
import { useRibbonStyleStore } from "@/store";
import { RgbaColorPicker } from "react-colorful";
import styles from "@/styles/ShadowController.module.css";

const ShadowController = () => {
  const shadowColor = useRibbonStyleStore((state) => state.shadowColor);
  const shadowHorizontalOffset = useRibbonStyleStore(
    (state) => state.shadowHorizontalOffset
  );
  const shadowVerticalOffset = useRibbonStyleStore(
    (state) => state.shadowVerticalOffset
  );
  const shadowBlurRadius = useRibbonStyleStore(
    (state) => state.shadowBlurRadius
  );
  const shadowSpreadRadius = useRibbonStyleStore(
    (state) => state.shadowSpreadRadius
  );
  const setShadowColor = useRibbonStyleStore((state) => state.setShadowColor);
  const setShadowHorizontalOffset = useRibbonStyleStore(
    (state) => state.setShadowHorizontalOffset
  );
  const setShadowVerticalOffset = useRibbonStyleStore(
    (state) => state.setShadowVerticalOffset
  );
  const setShadowBlurRadius = useRibbonStyleStore(
    (state) => state.setShadowBlurRadius
  );
  const setShadowSpreadRadius = useRibbonStyleStore(
    (state) => state.setShadowSpreadRadius
  );
  return (
    <div className={styles.container}>
      <div className={styles.rangeSliders}>
        <RangeSlider
          label="Horizontal Offset"
          setFunction={setShadowHorizontalOffset}
          value={shadowHorizontalOffset}
          min={-20}
          max={20}
          key={1}
          step={1}
        />
        <RangeSlider
          label="Vertical Offset"
          setFunction={setShadowVerticalOffset}
          value={shadowVerticalOffset}
          min={-20}
          max={20}
          step={1}
          key={2}
        />
        <RangeSlider
          label="Blur Radius"
          setFunction={setShadowBlurRadius}
          value={shadowBlurRadius}
          min={0}
          max={20}
          step={1}
          key={3}
        />
        <RangeSlider
          label="Spread Radius"
          setFunction={setShadowSpreadRadius}
          value={shadowSpreadRadius}
          min={0}
          max={20}
          step={1}
          key={4}
        />
      </div>
      <div>
        <RgbaColorPicker color={shadowColor} onChange={setShadowColor} />
      </div>
    </div>
  );
};
export default ShadowController;
