/* eslint-disable */
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const handleLogin = () => {
    localStorage.setItem("token", "fake-token");
};

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
                </li><br />
                <li>
                    <Link to="/chapter3-lecture1">Chapter 3 - Lecture 1 - LifeCycle</Link>
                </li>
                <li>
                    <Link to="/chapter3-lecture2">Chapter 3 - Lecture 2 - UseRef</Link>
                </li>
                <li>
                    <Link to="/chapter3-lecture3">Chapter 3 - Lecture 3 - Conditional</Link>
                </li>
                <li>
                    <Link to="/chapter3-lecture4">Chapter 3 - Lecture 4 - Render List</Link>
                </li>
                <li>
                    <Link to="/chapter3-lecture5">Chapter 3 - Lecture 5 - Form Handling </Link>
                </li><br />
                <li>
                    <Link to="/chapter4-lecture1">Chapter 4 - Lecture 1 - Axios </Link>
                </li>
                <li>
                    <Link to="/chapter4-lecture2">Chapter 4 - Lecture 2 - Async/Await </Link>
                </li>
                <li>
                    <Link to="/chapter4-lecture3">Chapter 4 - Lecture 3 - Loading, Error, Success Status</Link>
                </li>
                <li>
                    <Link to="/chapter4-lecture4">Chapter 4 - Lecture 4 - UseContext</Link>
                </li>
                <li>
                    <Link to="/chapter4-lecture5">Chapter 4 - Lecture 5</Link>
                </li><br />
                <li>
                    <Link to="/chapter5-lecture1">Chapter 5 - Lecture 1 - Route</Link>
                </li>
                <li>
                    <Link to="/chapter5-lecture2">Chapter 5 - Lecture 2 - Nested Route</Link>
                </li>
                <li>
                    <Link to="/chapter5-lecture3">Chapter 5 - Lecture 3 - Dynamic Route</Link>
                </li>
                <li>
                    <Link onClick={handleLogin} to="/chapter5-lecture4">Chapter 5 - Lecture 4 - Protected Route</Link>
                </li>
                <li>
                    <Link to="/chapter5-lecture5">Chapter 5 - Lecture 5 - Redirect</Link>
                </li><br />
                <li>
                    <Link to="/chapter6-lecture1">Chapter 6 - Lecture 1 - Redux</Link>
                </li>
                <li>
                    <Link to="/chapter6-lecture2">Chapter 6 - Lecture 2 - Slice</Link>
                </li>
                <li>
                    <Link to="/chapter6-lecture5">Chapter 6 - Lecture 5 - AsyncThunk</Link>
                </li>
            </ul>
        </React.Fragment>
    )
}

export default Lecture;