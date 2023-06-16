import { useRibbonStyleStore } from "@/store";
import styles from "@/styles/UrlText.module.css";
const UrlText = () => {
  const { githubUrl, setGithubUrl, ribbonText, setRibbonText } =
    useRibbonStyleStore();
  const handleChange = (event) => {
    if (event.target.name === "url") setGithubUrl(event.target.value);
    else setRibbonText(event.target.value);
  };
  return (
    <div className={styles.container}>
      <label htmlFor="url">Url :</label>
      <input
        type="text"
        id="url"
        name="url"
        value={githubUrl}
        onChange={handleChange}
      />
      <label htmlFor="text">Text :</label>
      <input
        className={styles.text}
        type="text"
        name="text"
        id="text"
        value={ribbonText}
        onChange={handleChange}
      />
    </div>
  );
};

export default UrlText;
