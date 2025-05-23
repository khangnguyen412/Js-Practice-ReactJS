/* Import thư viện */
import React from "react";

/**
 * Lecture 01: JSX – Viết HTML trong JavaScript
*/
/**
 * Quy tắc đặt tên hàm phải viết hoa đầu tiên
 * @returns 
*/
const Name = 'khang';
function Helloworld() {
    return (
        <React.StrictMode>
            <h1>Welcome to my app, {Name}. This is first lectures of Reactjs</h1>
            <button>Button</button>
        </React.StrictMode>
    )
}

export default Helloworld