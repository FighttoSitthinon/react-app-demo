import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from '../src/component/helloComponent';
import Counter from '../src/component/countComponent';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello/>
      </header>
      <Counter/>
    </div>
  );

  
}

export default App;
