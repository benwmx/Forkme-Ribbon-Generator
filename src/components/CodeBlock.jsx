// import { CodeBlock, dracula } from "react-code-blocks";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeBlock = ({ code }) => {
  return (
    <SyntaxHighlighter language="html" style={atomOneDark} showLineNumbers>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
