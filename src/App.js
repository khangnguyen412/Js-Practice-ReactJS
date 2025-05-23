import React from "react";
import logo from './logo.svg';
import './App.css';

import Helloworld from "./chapter-02/examples/lecture01-start-learning";

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
        <Helloworld></Helloworld>
    </React.StrictMode>

  );
}

export default App;
