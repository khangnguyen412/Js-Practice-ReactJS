/* Import thư viện */
import React from "react";

/**
 *  Lecture 03: Function component vs Class component
*/
class ClassComponent extends React.Component { // đầy là class component
    /**
     *  Mounting – Component được tạo và chèn vào DOM
     *  - Được thưc thi khi đc chạy render() lần đầu
     */
    componentDidMount() {
        console.log('Component đã mount');
        this.timer = setInterval(() => {
            console.log('Đang chạy...');
        }, 1000);
    }

    /**
     *  Unmounting – Component bị gỡ khỏi DOM được sử dụng khi
     *  - Người dùng điều hướng sang trang khác (React Router)
     *  - Điều kiện hiển thị không còn đúng (ví dụ: {condition && <MyComponent />})
     *  - Component bị xóa khỏi giao diện
     */
    componentWillUnmount() {
        console.log('Component sẽ bị unmount');
        clearInterval(this.timer); // Dọn dẹp timer khi component bị gỡ
    }

    render() {
        return <span> Đây là class component</span>
    }
}

export default ClassComponent