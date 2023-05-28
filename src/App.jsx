import "@/styles/App.css";
import RadioButton from "@/components/RadioButton";
import Ribbon from "@/components/Ribbon";

function App() {
  return (
    <>
      <Ribbon />
      <fieldset>
        <legend>Title</legend>
        <RadioButton value={"Color"} />
      </fieldset>
    </>
  );
}

export default App;
