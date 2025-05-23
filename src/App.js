import React from "react";
import logo from './logo.svg';
import './App.css';

import Intro from "./chapter-02/examples/lecture01-intro";

const AppDefault = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          Learn React
        </a>
      </header>
    </div>
  )
}

function App() {
  return (
    // <React.StrictMode>
    //   <AppDefault></AppDefault>
    // </React.StrictMode>
    <React.StrictMode>
        <Intro></Intro>
    </React.StrictMode>

  );
}

export default App;
