/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "../redux/slice/lecture02-slice";

const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const SliceFunction = () => {
    const count = useSelector((state) => state.lecture2.value);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(count);
    }, [count])

    return (
        <React.Fragment>
            <h1>Slice Function</h1>
            <h2>Count: {count}</h2>
            <button style={buttonStyle} onClick={() => dispatch(increment())}>+</button>
            <button style={buttonStyle} onClick={() => dispatch(decrement())}>-</button>
            <button style={buttonStyle} onClick={() => dispatch(incrementByAmount(5))}>+5</button>
            <button style={buttonStyle} onClick={() => dispatch(reset())}>Reset</button>
        </React.Fragment>
    )
}

export default SliceFunction;