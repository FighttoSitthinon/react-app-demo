import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "../src/component/helloComponent";
import Counter from "./component/counterComponent";

function App() {
  const [isBool, setBool] = useState(false);

  const changeState = () => {
    setBool(!isBool);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
      </header>
      <span className="m-2">{isBool ? "true" : "false"}</span>
      <button onClick={changeState}>Set bool</button>
      <Counter />
    </div>
  );
}

export default App;
