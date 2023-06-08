const RangeSlider = ({ label, setFunction, value, min, max }) => {
  const handleChange = (event) => {
    setFunction(parseInt(event.target.value));
    console.log("taget ", label, "value", event.target.value);
  };
  return (
    <div>
      <label htmlFor="range">{label}</label>
      <input
        type="range"
        id="range"
        min={min}
        max={max}
        step={1}
        onChange={handleChange}
        value={value}
      ></input>

      <input
        type="text"
        id="customInput"
        value={value}
        onChange={handleChange}
      ></input>
      <label htmlFor="customInput">px</label>
    </div>
  );
};

export default RangeSlider;
