/* eslint-disable */
import React, { useEffect, useRef, useState, useCallback } from "react";

const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

/**
 * Chỉ Render khi props thay đổi (khi click tăng count thì sẽ ko bị render lại)
 */
const Child = React.memo(({ onClick }) => {
    console.log('Child rendered!');
    return (
        <button onClick={onClick} style={buttonStyle}>Click me</button>
    )
})

/**
 * Render mỗi khi component render (khi click tăng count thì sẽ bị render lại)
 */
const ChildWithoutCallback = React.memo(({ onClick }) => {
    console.log('ChildWithoutCallback rendered!');
    return (
        <button onClick={onClick} style={buttonStyle}>Click me</button>
    )
})

const CallbackFunction = () => {
    const [Count, SetCount] = useState(0);
    const HandleClick = useCallback(() => {
        console.log("Thêm một todo mới với useCallback!");
    }, [])

    const HandleClickWithoutCallback = () => {
        console.log("Thêm một todo mới ko có useCallback!");
    }

    return (
        <React.Fragment>
            <h2>Count: {Count}</h2>
            <button onClick={() => SetCount(Count + 1)} style={buttonStyle}>Tăng count</button>
            <Child onClick={HandleClick} />
            <ChildWithoutCallback onClick={HandleClickWithoutCallback} />
        </React.Fragment>
    )
}

export default CallbackFunction