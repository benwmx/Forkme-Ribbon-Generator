import CodeBlock from "@/components/CodeBlock";
import { useRibbonStyleStore } from "@/store";
// import styles from "@/styles/Tabs.module.css";
import { useState } from "react";

const GeneratedCode = () => {
  const [code, setCode] = useState();
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
  const rotation = alignment === "right" ? "+" : "-";
  const generateCode = () => {
    setCode(`
    <style>
    .ribbon a {
      background: ${ribbonColor};
      color: ${textColor};
      text-decoration: none;
      font-family: arial, sans-serif;
      text-align: center;
      font-weight: bold;
      padding: 5px 40px;
      font-size: 1rem;
      line-height: 2rem;
      position: relative;
      transition: 0.5s;
    }
    .ribbon a:hover {
      background: ${ribbonHoverColor};
      color: ${textHoverColor};
    }
    .ribbon a::before,
    .ribbon a::after {
      content: "";
      width: 100%;
      display: block;
      position: absolute;
      top: 1px;
      left: 0;
      height: 1px;
      background: ${linesColor};
    }
    .ribbon a::after {
      bottom: 1px;
      top: auto;
    }
    @media screen and (min-width: ${breakPoint}px) {
      .ribbon {
        position: ${verticalPosition};
        display: block;
        top: 0;
        ${alignment}: 0;
        width: 200px;
        overflow: hidden;
        height: 200px;
        z-index: 9999;
      }
      .ribbon a {
        width: 200px;
        position: absolute;
        top: 60px;
        ${alignment}: -60px;
        transform: rotate(${rotation}45deg);
        -webkit-transform: rotate(${rotation}45deg);
        -ms-transform: rotate(${rotation}45deg);
        -moz-transform: rotate(${rotation}45deg);
        -o-transform: rotate(${rotation}45deg);
        box-shadow: ${shadowHorizontalOffset}px ${shadowVerticalOffset}px ${shadowBlurRadius}px ${shadowSpreadRadius}px rgba(${shadowColor.r}, ${shadowColor.g}, ${shadowColor.b}, ${shadowColor.a});
      }
    }
    </style>

    <span class="ribbon">
      <a href="${githubUrl}">${ribbonText}</a>
    </span>`);
  };
  return (
    <>
      <select>
        <option value={"HTML & CSS"}> HTML & CSS</option>
        <option value={"REACT"}>REACT</option>
      </select>
      <button onClick={generateCode}> Generate Code</button>
      <CodeBlock code={code} />
    </>
  );
};

export default GeneratedCode;
