import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "../src/component/helloComponent";
import Counters from './component/countersComponent';
import NavBar from './component/navbar';

function App() {
  const [isBool, setBool] = useState(false);

  const changeState = () => {
    setBool(!isBool);
  };

  return (
    <div className="App">
      <NavBar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello />
      </header>
      <span className="m-2"><b>{isBool ? "TRUE" : "FALSE"}</b></span>
      <button onClick={changeState} className="btn btn-info btn-sm m-2">Set bool</button>
      <Counters />
    </div>
  );
}

export default App;
