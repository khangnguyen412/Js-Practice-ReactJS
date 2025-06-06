/* Import thư viện */
import React, { useEffect, useRef } from "react";

/**
 *  Bài 2:  useRef – truy cập dom & giữ giá trị không làm re-render
 *  - Là một React Hook giúp bạn "nhớ" một giá trị qua các lần render mà không làm component re-render . 
*/
const UseRefFunc = () => {
    // eslint-disable-next-line
    const FirstInput = useRef(0); // → ref.current sẽ chứa giá trị bạn muốn giữ lại qua các lần render.

    const InputFocus = useRef(null);
    useEffect(() => {
        InputFocus.current.focus();
    }, [])
    return (
        <React.Fragment>
            <input type="text" ref={InputFocus} placeholder="Nhập vào đây" /><br />
        </React.Fragment>
    )
}

export default UseRefFunc