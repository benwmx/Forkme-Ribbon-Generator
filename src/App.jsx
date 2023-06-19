import "@/styles/App.css";
import Ribbon from "@/components/Ribbon";
import ColorsController from "@/components/ColorsController";
import ShadowController from "./components/ShadowController";
import AlignmentPosition from "./components/AlignmentPosition";
import GeneratedCode from "./components/GeneratedCode";
import UrlText from "./components/UrlText";
import BreakPoints from "./components/BreakPoints";
import { ImFlag } from "react-icons/im";
import Info from "@/components/Info";

function App() {
  return (
    <>
      <Ribbon />
      <div className="main">
        <fieldset className="controllers">
          <legend>Customize your Ribbon </legend>
          <div className="line"></div>

          <p className="title">
            <ImFlag />
            {" Ribbon"}
          </p>
          <div className="line"></div>

          <UrlText className="element" />
          <ColorsController className="element" />
          <AlignmentPosition className="element" />
          <BreakPoints className="element" />
          <div className="line"></div>
          <p className="title">
            <ImFlag />
            {" Shadow"}
          </p>
          <div className="line"></div>
          <ShadowController className="element" />
        </fieldset>
        <fieldset className="generatedCode">
          <legend>Copy Your Code</legend>
          <GeneratedCode />
        </fieldset>
      </div>
      <Info />
    </>
  );
}

export default App;
