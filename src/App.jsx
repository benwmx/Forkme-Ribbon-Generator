import "@/styles/App.css";
import Ribbon from "@/components/Ribbon";
import ColorsController from "@/components/ColorsController";

function App() {
  return (
    <>
      <Ribbon />
      <fieldset>
        <legend>Customize your Ribbon </legend>
        <ColorsController />
      </fieldset>
    </>
  );
}

export default App;
