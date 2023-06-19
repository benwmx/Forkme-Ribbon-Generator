import styles from "@/styles/Info.module.css";
import icon from "@/assets/github.gif";

const Info = () => {
  return (
    <fieldset className={styles.container}>
      <p className={styles.paragraph}>
        Created By <a href="https://github.com/benwmx">Rachid Boudaoudi</a>
      </p>
      <p className={styles.paragraph}>If you like it give it at star at</p>
      <a
        href="https://github.com/benwmx/ForkMe-Generator"
        className={styles.logo}
        target="_blank"
        rel="noreferrer"
      >
        <img src={icon} alt="animated github logo" />
      </a>
    </fieldset>
  );
};

export default Info;
