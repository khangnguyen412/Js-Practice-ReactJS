/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/actions/lecture01-reduxintro";

const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const ReduxFunction = () => {
    const count = useSelector(state => state.lecture1.count)
    const dispatch = useDispatch()
    
    return (
        <React.Fragment>
            <h1>Redux Function</h1>
            <h2>Count: {count}</h2>
            <button style={buttonStyle} onClick={() => dispatch(increment())}>+</button>
            <button style={buttonStyle} onClick={() => dispatch(decrement())}>-</button>
        </React.Fragment>
    )
}

export default ReduxFunction
