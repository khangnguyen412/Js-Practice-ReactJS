/* Import thư viện */
import React from "react";

/**
 *  Lecture 02: JSX – VIẾT GIAO DIỆN TRONG JAVASCRIPT
 *  JSX (JavaScript XML) LÀ GÌ?
 *      - JSX  là một phần mở rộng cú pháp cho JavaScript, cho phép bạn viết mã giống HTML/XML bên trong JavaScript. 
*/
/**
 *  - Quy tắc đặt tên hàm phải theo kiểu PascalCase hoặc camelCase
 *  
 *  @returns 
*/
function JSX() {
    const Name = 'khang';
    return (
        <React.Fragment>
            {/* 
            - JSX chỉ trả về một phần tử cha duy nhất
            - Phải dùng thẻ các thẻ bọc lại
                + Các thẻ html thông thường <div></div>,
                + nếu không muốn thêm DOM node thừa: <React.Fragment></React.Fragment>, <></> 
            */}
            <h1>Chapter 2 - Lecture 1</h1>


            {/*
            - Nhúng biến vào 1 html 
            */}
            <h1> Đây là biểu thức nhúng biến: {Name}</h1>
        </React.Fragment>
    )

    /* - Trường hợp này sai vì jsx chỉ trả về duy nhất 1 phần tử cha
    return (
        <h1>Welcome to my app, {Name}. This is first lectures of Reactjs</h1>
        <button>Button</button>
    ) */
}

export default JSX