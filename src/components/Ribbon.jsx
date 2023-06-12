import styles from "@/styles/Ribbon.module.css";
import { useRibbonStyleStore } from "@/store";
import { useState } from "react";
import { useMediaQuery } from "@react-hook/media-query";
const Ribbon = () => {
  // To monitor the ribbon hover state.
  const [isHover, setIsHover] = useState(false);
  // Get the styles for the store.
  const githubUrl = useRibbonStyleStore((state) => state.githubUrl);
  const ribbonText = useRibbonStyleStore((state) => state.ribbonText);
  const ribbonColor = useRibbonStyleStore((state) => state.ribbonColor);
  const ribbonHoverColor = useRibbonStyleStore(
    (state) => state.ribbonHoverColor
  );
  const textColor = useRibbonStyleStore((state) => state.textColor);
  const textHoverColor = useRibbonStyleStore((state) => state.textHoverColor);
  const linesColor = useRibbonStyleStore((state) => state.linesColor);
  const breakPoint = useRibbonStyleStore((state) => state.breakPoint);
  const alignment = useRibbonStyleStore((state) => state.alignment);
  const verticalPosition = useRibbonStyleStore(
    (state) => state.verticalPosition
  );
  const shadowColor = useRibbonStyleStore((state) => state.shadowColor);
  const shadowHorizontalOffset = useRibbonStyleStore(
    (state) => state.shadowHorizontalOffset
  );
  const shadowVerticalOffset = useRibbonStyleStore(
    (state) => state.shadowVerticalOffset
  );
  const blurRadius = useRibbonStyleStore((state) => state.shadowBlurRadius);
  const spreadRadius = useRibbonStyleStore((state) => state.shadowSpreadRadius);
  const shadowStyle = `${shadowHorizontalOffset}px ${shadowVerticalOffset}px ${blurRadius}px ${spreadRadius}px rgba(${shadowColor.r}, ${shadowColor.g}, ${shadowColor.b}, ${shadowColor.a})`;

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
