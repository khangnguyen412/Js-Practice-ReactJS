/* Import thư viện */
import React, {useEffect, useState} from "react";

/**
 *  Lecture 03: Function component vs Class component
*/
function Component(param) { // đây là function component
    return <h1>Được gọi từ function component có tham số là {param.name}</h1>;
}
function FunctionComponent() { 
    /**
     *  {useState} là một hook giúp bạn thêm trạng thái (state) vào Function Component
     *  Trong đó:
     *      - time: biến chứa giá trị trạng thái hiện tại → ban đầu là thời gian lúc render lần đầu (new Date())
     *      - setTime: hàm để cập nhật trạng thái time
     */
    /**
     *  - time: Thời gian ban đầu (lúc render lần đầu)
     *  - setTime(...) Hàm dùng để cập nhật thời gian
     *  -  useState(...) luôn trả về một cặp giá trị (Giống như: "Tôi đã thay đổi trạng thái time, hãy vẽ lại giao diện đi!""):
     *      + Giá trị hiện tại: time
     *      + Hàm để thay đổi giá trị đó: setTime 
     *  - Cú Pháp: 
     *      $ const arr = ["Giá trị hiện tại", "Hàm để cập nhật"];
     */
    const [time, setTime] = useState(new Date());
    /**
     *  useEffect(() => {...})
     *  - Chạy sau khi component được vẽ trên màn hình
     *  - Giống như "khi nào component xuất hiện thì làm gì"
     */
    useEffect (() => {
        const timer_id = setInterval(() => {
            setTime(new Date()) // Lấy thời gian hiện tại
        }, 1000)

        /**
         *  return () => {...}
         *  - Đoạn code này chạy trước khi component biến mất khỏi màn hình
         *  - Giúp dọn dẹp những thứ không còn cần thiết nữa (ví dụ: dừng đồng hồ)
         */
        return () => {
            clearInterval(timer_id) // gỡ hàm
        }
    })
    return (
        <React.Fragment>
            <Component></Component>
            <span>Thời gian hiện tại: {time.toLocaleTimeString()}</span>
        </React.Fragment>
    )
}

export default FunctionComponent