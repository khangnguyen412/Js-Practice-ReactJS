/* Import thư viện */
import React, { useEffect, useRef, useState } from "react";

/**
 *  Bài 2:  useRef – truy cập dom & giữ giá trị không làm re-render
 *  - Là một React Hook giúp bạn "nhớ" một giá trị qua các lần render mà không làm component re-render. 
*/
const UseRefFunc = () => {
    // eslint-disable-next-line
    const FirstInput = useRef(0); // → ref.current sẽ chứa giá trị bạn muốn giữ lại qua các lần render.

    /**
     *  Truy cập dom element bằng Ref
     */
    const InputFocus = useRef(null);
    useEffect(() => {
        InputFocus.current.focus(); // dán element dom vào current của biến InputFocus và chạy focus() (thay thế  document.query(...))
    }, [])

    /**
     *  Dùng useRef để giữ giá trị qua các lần render
     *  Dùng useRef để lưu trữ giá trị, ví dụ như:
     *      - Số lần nhấn nút
     *      - Giá trị trước đó của một state
     *      - ID của timer
     */
    const [Count, SetCount] = useState(0);
    const CountRef = useRef(0);
    const HandleClick = () => {
        CountRef.current += 1;
        SetCount(Count + 1);
    }

    const PrevCount = useRef(0);
    useEffect(() => {
        PrevCount.current = Count;
    }, [Count])

    /**
     *  Giữ nguyên giá trị qua các lần render
     */
    const count = useRef(0);
    useEffect(() => {
        console.log('Component re-render');
    });

    return (
        <React.Fragment>
            <div>
                <input type="text" ref={InputFocus} placeholder="Nhập vào đây" />
            </div><br />

            <div>
                <p>Số lần đã nhấn: {Count}</p>
                <p>Số lần dùng Ref: {CountRef.current}</p>
                <h1>Lần trước: {PrevCount.current}</h1>
                <button onClick={HandleClick}>Nhấn vào đây</button>
            </div><br />

            <div>
                <p>Bạn đã click {count.current} lần</p>
                <button onClick={() => count.current++}>Click me</button>
            </div>

            
        </React.Fragment>
    )
}

export default UseRefFunc

/**
 *  Giải thích bài toán PrevCount
 *  + Ban đầu: Count = 0 (do useState(0)) | CountRef = 0; (do useRef(0)) |  PrevCount = 0; (do useRef(0))
 *  + React Render -> useEffect(() => {}, [Count]) ko chạy vì count ko thay đổi
 *  + Lần 1: Ng dùng click vào button, HandleClick đc chạy -> Count = 1 (do SetCount(Count + 1)) | CountRef = 1; (do CountRef.current += 1;) 
 *  + Count thay đổi -> React Render (PrevCount.current = Count vẫn là giá trị cũ là 0)
 *  + -> useEffect bắt đầu chay PrevCount.current = 1
 *  + Lúc này useEffect vừa chạy xong nên PrevCount đã bằng 1, nhưng UI chỉ cập nhật sau khi re-render → vẫn thấy 0 ở lần đầu
 *  + (Lưu ý: useEffect chạy sau khi render hoàn tất, nên lúc hiển thị ban đầu, PrevCount vẫn là 0.)
 *  + Lần 2: Count = 2 (do SetCount(Count + 1)) | CountRef = 2; (do CountRef.current += 1;) 
 *  + Count thay đổi -> React Render (PrevCount.current = Count vẫn là giá trị cũ là 1) 
 *  + -> useEffect bắt đầu chay PrevCount.current = 2
 */