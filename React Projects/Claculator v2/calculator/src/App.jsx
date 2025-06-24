import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calVal, setcalVal] = useState("");
  const onButtonClicked = (buttonText) => {
    if (buttonText === "C") {
      setcalVal("");
      // handle clear
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setcalVal(result);
      // handle equals
    } else {
      const newDisplayValue = calVal + buttonText;
      setcalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayVal={calVal}></Display>
      <ButtonsContainer onButtonClicked={onButtonClicked}></ButtonsContainer>
    </div>
  );
}

export default App;
