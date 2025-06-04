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
 *  - props dược truyền từ cha xuống dưới dạng obj
 */
const OBJ = ({obj}) => {
    return (
        <React.Fragment>
            <ul>
                <li>{obj.name}</li>
                <li>{obj.age}</li>
            </ul>
        </React.Fragment>
    )
}

/**
 *  - props dược truyền từ cha xuống dưới dạng callback
 */
const Callback = ({text, callback}) => {
    return (
        <React.Fragment>
            <button onClick={callback}>{text}</button><br />
        </React.Fragment>
    )
}

/**
 *  - set giá trị mặc định của props
 */
const DefaultVal = ({text = 'Người dùng'}) => {
    return (
        <React.Fragment>
            <span>{text}</span>
        </React.Fragment>
    )
}

function Props() {
    const HandleClick = () => {
        console.log('truyền props dưới dạng callback') 
    }
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
            
            {/* Truyền OBJ */}
            <OBJ obj={{name: 'khang', age: '24'}}></OBJ>
            
            {/* Truyền Callback */}
            <Callback text='click vào đây' callback={HandleClick}></Callback>

            {/* Giá trị mặc định của Default */}
            <DefaultVal></DefaultVal>
        </React.Fragment>
    )
}

export default Props