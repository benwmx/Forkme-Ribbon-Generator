import { useRibbonStyleStore } from "@/store";
import RangeSlider from "./RangeSlider";

const BreakPoints = () => {
  const { breakPoint, setBreakPoint } = useRibbonStyleStore();
  return (
    <div>
      <RangeSlider
        label="Resposive Break Point"
        setFunction={setBreakPoint}
        value={breakPoint}
        min={400}
        max={1280}
        step={10}
      />
    </div>
  );
};

export default BreakPoints;
