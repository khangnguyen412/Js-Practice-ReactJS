import React from "react";
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Welcome from './pages/welcome';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
              Learn React
            </a>
            <div>
              <Link to="/welcome">Lecture 3</Link>
            </div>
          </header>
        </div>
        <Routes>
          <Route>
            <Route path='/welcome' element={<Welcome></Welcome>}></Route>
          </Route>
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
