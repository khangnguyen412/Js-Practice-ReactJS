import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chap2Lecture01 from './chapter-02/examples/lecture01-intro';
import Chap2Lecture02 from './chapter-02/examples/lecture02-jsx';

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
      <Router>
        <div>
          <Link to="/Chap2Lecture01">Lecture 1</Link>
          <Link to="/Chap2Lecture02">Lecture 2</Link>
        </div>
        <Routes>
          <Route path='/Chap2Lecture01' element={<Chap2Lecture01></Chap2Lecture01>}></Route>
        </Routes>
        <Routes>
          <Route path='/Chap2Lecture02' element={<Chap2Lecture02></Chap2Lecture02>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

function App() {
  return (
    <React.StrictMode>
      <AppDefault></AppDefault>
    </React.StrictMode>
  );
}

export default App;
