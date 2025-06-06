import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // eslint-disable-line

const Lecture = () => {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link to="/chapter2-lecture1">Chapter 2 - Lecture 1</Link>
                </li>
                <li>
                    <Link to="/chapter2-lecture2">Chapter 2 - Lecture 2 - JSX</Link>
                </li>
                <li>
                    <Link to="/chapter2-lecture3-1">Chapter 2 - Lecture 3 - Function Component</Link>
                </li>
                <li>
                    <Link to="/chapter2-lecture3-2">Chapter 2 - Lecture 3 - Class Component</Link>
                </li>
                <li>
                    <Link to="/chapter2-lecture4">Chapter 2 - Lecture 4 - Props</Link>
                </li>
                <li>
                    <Link to="/chapter2-lecture5">Chapter 2 - Lecture 5 - UseState</Link>
                </li>
                <li>
                    <Link to="/chapter3-lecture1">Chapter 3 - Lecture 1 - LifeCycle</Link>
                </li>
                <li>
                    <Link to="/chapter3-lecture2">Chapter 3 - Lecture 2 - UseRef</Link>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Lecture;