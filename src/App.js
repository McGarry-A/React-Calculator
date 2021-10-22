import { useState } from "react";
import "./App.css";
import "./Components/View.css";
import "./Components/Numbers.css";
import "./Components/Functions.css";
import Wrapper from "./Components/Wrapper";
import { evaluate } from 'mathjs';
import "./App.css"


function App() {

  const [display, setDisplay] = useState("");

  let buttons = [
    "0",
    ".",
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
  ];

  const buttonHandler = (e) => {
    const buttonPressed = e.target.innerHTML
    setDisplay(display.concat(buttonPressed));
  };

  const equalHandler = () => {
    let answer = evaluate(display).toFixed(2)
    setDisplay(answer.toString())
  }

  const clearHandler = () => {
    let emptyString = ""
    setDisplay(emptyString);
  }
  
  const classes = (el) => "button" + el + " number"
  return (
    <Wrapper>
      <div className="view">{display}</div>
      <div className="numbers">
        {buttons.map((el, index) => {
          return (
            <div
              className={classes(el)}
              key={index}
              onClick={(e) => buttonHandler(e)}
              value={el}
            >
              {el}
            </div>
          );
        })}
        <div id="equal-operator" className="number" onClick={equalHandler}>=</div>
        <div id="clear-operator" className="number" onClick={clearHandler}>AC</div>
      </div>
    </Wrapper>
  );
}

export default App;
