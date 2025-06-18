import ClockName from "./components/ClockName"
import BelowText from "./components/BelowText"
import Clock from "./components/Clock"
import "./App.css"
function App() {

  return <center> 
    <ClockName></ClockName>
    <div className="BelowText">
      <BelowText></BelowText>
    </div>
    <div className="Clock">
      <Clock></Clock>
    </div>

  </center>
}

export default App
