/* eslint-disable */
import React, { useEffect, useMemo, useState } from "react";

const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const UseMemoFunction = () => {
    const [Numbers, setNums] = useState([1, 2, 3, 4, 5]);
    const [Count, setCount] = useState(0);

    // nếu ko dùng useMemo => bấm nút Tăng count → hàm evenSum vẫn chạy lại từ đầu.
    // nếu dùng useMemo => chỉ thực thi hàm này và tính lại khi dữ liệu khi Numbers thay đổi.
    const EvenSum = useMemo(() => {
        console.log("Numbers:", Numbers);
        console.log("Đang tính tổng số chẵn...");
        return Numbers.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);
    }, [Numbers])

    return (
        <React.Fragment>
            <h1>Tổng số chẵn: {EvenSum}</h1>
            <button style={buttonStyle} onClick={() => setCount(Count + 1)}>Tăng {Count}</button>
            <button style={buttonStyle} onClick={() => setNums([...Numbers, Numbers.length + 1])}>Thêm số</button>
        </React.Fragment>
    )
}

export default UseMemoFunction
