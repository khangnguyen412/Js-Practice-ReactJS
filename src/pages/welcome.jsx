import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Chap2Lecture01 from './chapter-02/examples/lecture01-intro';
import Chap2Lecture02 from './chapter-02/examples/lecture02-jsx';
import Chap2Lecture03 from './chapter-02/examples/lecture03-function-component';

const AppDefault = () => {
    return (
        <React.StrictMode>
            <ul>
                <li>
                    <Link to="/Chap2Lecture01">Lecture 1</Link>
                </li>
                <li>
                    <Link to="/Chap2Lecture02">Lecture 2</Link>
                </li>
                <li>
                    <Link to="/Chap2Lecture03">Lecture 3</Link>
                </li>
            </ul>
            <Routes>
                <Route path='/Chap2Lecture01' element={<Chap2Lecture01></Chap2Lecture01>}></Route>
            </Routes>
            <Routes>
                <Route path='/Chap2Lecture02' element={<Chap2Lecture02></Chap2Lecture02>}></Route>
            </Routes>
            <Routes>
                <Route path='/Chap2Lecture03' element={<Chap2Lecture03></Chap2Lecture03>}></Route>
            </Routes>
        </React.StrictMode>
    )
}

export default AppDefault;