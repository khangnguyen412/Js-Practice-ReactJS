import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // eslint-disable-line

const Lecture = () => {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to="/chapter2-lecture1">Lecture 1</Link>
                </li>
                <li>
                    <Link to="/chapter2-lecture2">Lecture 2 - JSX</Link>
                </li>
                <li>
                    <Link to="/chapter2-lecture3-function-component">Lecture 3 - Function Component</Link>
                </li>
                <li>
                    <Link to="/chapter2-lecture3-class-component">Lecture 3 - Class Component</Link>
                </li>
                <li>
                    <Link to="/chapter2-lecture4">Lecture 4 - Props</Link>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Lecture;