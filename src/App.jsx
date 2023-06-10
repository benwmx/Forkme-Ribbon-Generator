import "@/styles/App.css";
import Ribbon from "@/components/Ribbon";
import ColorsController from "@/components/ColorsController";
import ShadowController from "./components/ShadowController";
import AlignmentPosition from "./components/AlignmentPosition";
import GeneratedCode from "./components/GeneratedCode";

function App() {
  return (
    <>
      <Ribbon />
      <fieldset>
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
          <legend>Copy Your Code</legend>
          <GeneratedCode />
        </fieldset>
      </fieldset>
    </>
  );
}

export default App;
