import styles from "@/styles/Ribbon.module.css";
import { useRibbonStyleStore } from "@/store";
import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
const Ribbon = () => {
  // To monitor the ribbon hover state.
  const [isHover, setIsHover] = useState(false);
  const {
    githubUrl,
    ribbonText,
    ribbonColor,
    ribbonHoverColor,
    textColor,
    textHoverColor,
    linesColor,
    breakPoint,
    alignment,
    verticalPosition,
    shadowColor,
    shadowHorizontalOffset,
    shadowVerticalOffset,
    shadowBlurRadius,
    shadowSpreadRadius,
  } = useRibbonStyleStore();
  const shadowStyle = `${shadowHorizontalOffset}px ${shadowVerticalOffset}px ${shadowBlurRadius}px ${shadowSpreadRadius}px rgba(${shadowColor.r}, ${shadowColor.g}, ${shadowColor.b}, ${shadowColor.a})`;

  // Check if the screen matches the breakpoint
  const isWideScreen = useMediaQuery(`screen and (min-width: ${breakPoint}px)`);
  // Add the alignment style to ribbon right Or left;
  const rightAlignmentStyle = {
    right: "-60px",
    transform: "rotate(45deg)",
    WebkitTransform: "rotate(45deg)",
  };
  const leftAlignmentStyle = {
    left: "-60px",
    transform: "rotate(-45deg)",
    WebkitTransform: "rotate(-45deg)",
  };
  const alignmentStyle =
    alignment === "right" ? rightAlignmentStyle : leftAlignmentStyle;

  return (
    <div
      style={{
        position: verticalPosition,
        right: alignment === "right" ? "0" : "unset",
        left: alignment === "left" ? "0" : "unset",
      }}
      className={isWideScreen ? styles.ribbonInWideScreen : null}
    >
      <a
        href={githubUrl}
        className={styles.link}
        style={
          isHover
            ? {
                color: textHoverColor,
                backgroundColor: ribbonHoverColor,
                boxShadow: shadowStyle,
                ...alignmentStyle,
              }
            : {
                color: textColor,
                backgroundColor: ribbonColor,
                boxShadow: shadowStyle,
                ...alignmentStyle,
              }
        }
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <span
          style={{ backgroundColor: linesColor }}
          className={styles.before}
        ></span>
        {ribbonText}
        <span
          style={{ backgroundColor: linesColor }}
          className={styles.after}
        ></span>
      </a>
    </div>
  );
};

export default Ribbon;
