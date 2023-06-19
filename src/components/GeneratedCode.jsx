import SyntaxHighlighter from "react-syntax-highlighter";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useEffect, useState } from "react";
import { useRibbonStyleStore } from "@/store";
import { FaRegClipboard } from "react-icons/fa";
import styles from "@/styles/GeneratedCode.module.css";

const GeneratedCode = () => {
  const githubLogo = `
  
                  .;cdkO0KK0Okdl;.                   
               .l0WMMMMMMMMMMMMMMMMWKo'               
            .oNMMMMMMMMMMMMMMMMMMMMMMMMNd.            
          .kMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM0'          
         dMMMMMOdkKMMMMMMMMMMMMMMMMXkdxMMMMMk         
       .KMMMMMW     ;doc:;,,;;cox:.    KMMMMMN.       
      .NMMMMMMX                        OMMMMMMW'      
      KMMMMMMMK                        OMMMMMMMN      
     :MMMMMMM0                          xMMMMMMMd     
     0MMMMMMM.                           WMMMMMMN     
     NMMMMMMM                            NMMMMMMM     
     XMMMMMMM'                           MMMMMMMM     
     xMMMMMMMO                          dMMMMMMM0     
     .MMMMMMMMk                        oMMMMMMMM;     
      oMMMMNWMMWx,                  'oNMMMMMMMMk      
       xMMWo.'xWMMMXOx,        'xOXMMMMMMMMMMM0       
        cWMMMo.;0WMMM0          kMMMMMMMMMMMMd        
         .OMMMd  '.;..          :MMMMMMMMMMK'         
           'OMMW0dllo;          :MMMMMMMM0;           
             .lKMMMMMd          :MMMMMXo.             
                 ;oOK:          'K0d;.                
                                           
                                                      
  `;
  const [result, setResult] = useState(githubLogo);
  const [language, setLanguage] = useState("text");
  const [message, setMessage] = useState("");
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
    setLanguage("html");
    setMessage("");
    setResult(`<style>
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
  const copyToClipBoard = () => {
    navigator.clipboard
      .writeText(result)
      .then(() => {
        setMessage("COPIED TO CLIPBOARD");
      })
      .catch((error) => {
        setMessage(error);
      });
  };
  useEffect(() => {
    if (language === "html") generateCode();
  }, [
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
  ]);
  return (
    <div className={styles.container}>
      <button onClick={generateCode} className={styles.generateBtn}>
        {" "}
        Generate Code
      </button>
      <div className={styles.copySection}>
        <p className={styles.copy}>{message}</p>
        <FaRegClipboard className={styles.copyBtn} onClick={copyToClipBoard} />
      </div>
      <SyntaxHighlighter
        language={language}
        style={arta}
        customStyle={{
          borderRadius: "0px 0px 20px 20px",
          marginTop: 0,
          height: "80%",
        }}
        showLineNumbers
      >
        {result}
      </SyntaxHighlighter>
      <button className={styles.resetBtn}>Reset</button>
    </div>
  );
};

export default GeneratedCode;
