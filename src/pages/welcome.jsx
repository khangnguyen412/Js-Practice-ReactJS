import React from "react";
import logo from '../logo.svg';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'; // eslint-disable-line

const AppDefault = () => {
    return (
        <React.Fragment>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                        Learn React
                    </a>
                    <Link to="/choose-lecture">Choose Lecture</Link>
                </header>
            </div>
        </React.Fragment>
    )
}

export default AppDefault;