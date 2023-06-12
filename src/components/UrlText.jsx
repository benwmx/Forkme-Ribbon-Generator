import { useRibbonStyleStore } from "@/store";
const UrlText = () => {
  const { githubUrl, setGithubUrl, ribbonText, setRibbonText } =
    useRibbonStyleStore();
  const handleChange = (event) => {
    if (event.target.name === "url") setGithubUrl(event.target.value);
    else setRibbonText(event.target.value);
  };
  return (
    <div>
      <input type="text" name="url" value={githubUrl} onChange={handleChange} />
      <input
        type="text"
        name="text"
        value={ribbonText}
        onChange={handleChange}
      />
    </div>
  );
};

export default UrlText;
