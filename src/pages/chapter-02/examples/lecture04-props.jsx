import React from "react";
/***** Chuyền props từ component con xuống cha *****/
/**
 *  - props dược truyền từ cha xuống dưới dạng object nên muốn gọi ra thì: {props.[tên biến truyền vào]}
 */
const ChildComponentObj = (props) => {
    return (
        <React.Fragment>
            <p>Đây là phần con, kế thừa biến dạng obj tù cha có giá trị: {props.name}</p>
        </React.Fragment>
    );
}

/**
 *  - props dược truyền từ cha xuống dưới dạng chuỗi hoặc số nguyên
 */
const ChildComponentVar = ({ param }) => {
    return (
        <React.Fragment>
            <p>Đây là phần con, kế thừa biến đơn cha có giá trị: {param}</p>
        </React.Fragment>
    );
}

/**
 *  - props dược truyền từ cha xuống dưới dạng boolean
 */
const IsAdmin = (isAdmin) => {
    return <p>{isAdmin ? 'Bạn là admin' : 'Bạn không phải admin'}</p>;
}

/**
 *  - props dược truyền từ cha xuống dưới dạng mãng
 */
const List = ({ list }) => {
    return (
        <ul>
            {list.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

/**
 * 
 * @returns 
 */

function Props() {
    return (
        <React.Fragment>
            <ChildComponentObj name="Khang"></ChildComponentObj>

            {/* Truyền chuỗi */}
            <ChildComponentVar param="Khang"></ChildComponentVar>

            {/* Truyền số */}
            <ChildComponentVar param={25}></ChildComponentVar>

            {/* Truyền boolean */}
            <IsAdmin isAdmin='true'></IsAdmin>

            {/* Truyền Mãng */}
            <List list={['React', 'Angular', 'Vue']}></List>
        </React.Fragment>
    )
}

export default Props