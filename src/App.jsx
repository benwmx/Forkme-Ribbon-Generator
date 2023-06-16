import "@/styles/App.css";
import Ribbon from "@/components/Ribbon";
import ColorsController from "@/components/ColorsController";
import ShadowController from "./components/ShadowController";
import AlignmentPosition from "./components/AlignmentPosition";
import GeneratedCode from "./components/GeneratedCode";
import UrlText from "./components/UrlText";
import BreakPoints from "./components/BreakPoints";

function App() {
  return (
    <>
      <Ribbon />
      <div className="main">
        <fieldset className="controllers">
          <fieldset>
            <legend>Github Url & Text</legend>
            <UrlText />
          </fieldset>
          <legend>Customize your Ribbon </legend>
          <fieldset>
            <legend>Colors</legend>
            <ColorsController />
          </fieldset>
          <fieldset>
            <legend>Shadow</legend>
            <ShadowController />
          </fieldset>
          <fieldset>
            <legend>Alignment & Position</legend>
            <AlignmentPosition />
          </fieldset>
          <fieldset>
            <legend>Responsive BreakPoint</legend>
            <BreakPoints />
          </fieldset>
        </fieldset>
        <fieldset className="generatedCode">
          <legend>Copy Your Code</legend>
          <GeneratedCode />
        </fieldset>
      </div>
    </>
  );
}

export default App;
