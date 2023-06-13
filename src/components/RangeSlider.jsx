import styles from "@/styles/RangeSlider.module.css";

const RangeSlider = ({ label, setFunction, value, min, max, step }) => {
  const handleChange = (event) => {
    setFunction(parseInt(event.target.value));
  };
  return (
    <div className={styles.container}>
      <div className={styles.inputText}>
        <p>{label}</p>
        <div className={styles.input}>
          <input
            type="text"
            id="customInput"
            value={value}
            onChange={handleChange}
          ></input>
          <label htmlFor="customInput">px</label>
        </div>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        onChange={handleChange}
        value={value}
      ></input>
    </div>
  );
};

export default RangeSlider;
