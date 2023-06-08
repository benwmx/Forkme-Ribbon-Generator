import "@/styles/App.css";
import Ribbon from "@/components/Ribbon";
import ColorsController from "@/components/ColorsController";
import ShadowController from "./components/ShadowController";

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
        </fieldset>
        <fieldset>
          <legend>Copy Your Code</legend>
        </fieldset>
      </fieldset>
    </>
  );
}

export default App;
