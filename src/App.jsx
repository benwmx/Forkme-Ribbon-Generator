import "@/styles/App.css";
import Ribbon from "@/components/Ribbon";
import RibbonColors from "@/components/RibbonColors";

function App() {
  return (
    <>
      <Ribbon />
      <fieldset>
        <legend>Customize your Ribbon </legend>
        <RibbonColors />
      </fieldset>
    </>
  );
}

export default App;
