/* Import thư viện */
import React from "react";

/**** Lecture 01: SPA ****/
/**
 *  - SPA (Single Page Application) là loại ứng dụng chỉ có một file HTML duy nhất và mọi nội dung sẽ được React cập nhật động mà không tải lại trang khi người dùng điều hướng.
 *  - Tức là React sẽ sử dụng duy nhất 1 trang public/index.html để render ra bên ngoài
 *  
 *  - Ưu Điểm:
 *      + Không tải lại trang
 *      + Nhanh hơn sau lần load đầu tiên
 *      + Framework: React, Vue, Angular
 */
function SPA() {
    return (
        <React.Fragment>
            <h1>Welcome to my app. This is first lectures of Reactjs</h1>
        </React.Fragment>
    )
}

export default SPA