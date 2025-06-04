import React, { useState } from "react";


function UseStateFunc() {
    /**
     *  Cú pháp useState:
     *      $ const [state, setState] = useState('giá_trị_ban_đầu');
     *  state: biến chứa giá trị hiện tại
     *  setState: hàm dùng để cập nhật giá trị mới cho state
     *  [giá_trị_ban_đầu]: có thể là số, chuỗi, mảng, object,...
     */
    /**
     *  Trạng thái boolean – bật/tắt
     */
    const [IsOn, SetOnStatus] = useState('false');

    /**
     *  Trạng thái số – đếm số lần nhấn
     */
    const [Count, SetCount] = useState(0);
    const HandleCount = () => {
        SetCount(Count + 1)
    }

    /**
     *  Trạng thái đối tượng – thông tin người dùng
     */
    const [User, UpdateUser] = useState({
        name: 'khang',
        age: 25,
        role: 'User',
    })
    const HandleUpdate = () => {
        UpdateUser({...User, role:'Admin'})
    }

    

    return (
        <React.Fragment>
            
            <p>Trạng thái: {IsOn ? 'Bật' : 'Tắt'}</p>
            <button onClick={() => { SetOnStatus(!IsOn) }}>
                {IsOn ? 'Tắt' : 'Bật'}
            </button><br/><br/>
            
            <p>Số đếm hiện tại {Count}</p>
            <button onClick={HandleCount}>Click vào đây để tăng số đếm</button><br/><br/>

            <ul>
                <li>Tên: {User.name}</li>
                <li>Tuổi: {User.age}</li>
                <li>Vai Trò: {User.role}</li>
                <li>
                    <button onClick={HandleUpdate}>Cập Nhật Vị Trí</button>
                </li>
            </ul>
        </React.Fragment>
    )


}

export default UseStateFunc