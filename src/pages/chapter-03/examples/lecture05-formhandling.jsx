/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";


/**
 *  Controlled components là gì?
*/
const FullName = () => {
    const [Username, SetUsername] = useState('');
    return (
        <div>
            <input type="text" value={Username} onChange={(e) => SetUsername(e.target.value)} placeholder="Nhập tên"></input>
        </div>
    )
}

/**
 *  Xử lý form khi nhấn "Gửi"
 */
const LoginForm = () => {
    const [Email, SetEmail] = useState('')
    const [Password, SetPassword] = useState('')

    const HandleSubmit = (e) => {
        e.preventDefault()
        console.log('Email: ', Email)
        console.log('Password: ', Password)
    }

    return (
        <React.Fragment>
            <form onSubmit={HandleSubmit}>
                <input type="text" value={Email} onChange={(e) => SetEmail(e.target.value)} placeholder="Nhập tên"></input>
                <input type="password" value={Password} onChange={(e) => SetPassword(e.target.value)} placeholder="Nhập Password"></input>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

/**
 *  Validation cơ bản trong form
 */
const FormValid = () => {
    const [Email, SetEmail] = useState('')
    const [Password, SetPassword] = useState('')
    const [Error, SetError] = useState('')

    const IsValidEmail = (e) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        const NewErr = {}
        if (!IsValidEmail(Email)) {
            NewErr.email = "Email ko hợp lệ"
        }
        if (Password.length < 6) {
            NewErr.pass = 'Pass phải nhiều hơn 6 ký tự'
        }
        if (Object.keys(NewErr).length == 0) {
            console.log('Đăng ký thành công')
        } else {
            SetError(NewErr)
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={HandleSubmit}>
                <div>
                    <label>Email:</label>
                    <input type="text" value={Email} onChange={(e) => SetEmail(e.target.value)} placeholder="Nhập tên"></input>
                    {Error.email && <p style={{ color: 'red' }}>{Error.email}</p>}
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input type="password" value={Password} onChange={(e) => SetPassword(e.target.value)} placeholder="Nhập Password"></input>
                    {Error.pass && <p style={{ color: 'red' }}>{Error.pass}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}

/**
 *  Xử lý nhiêu input bằng object state
 */
const UserInfomation = () => {
    const [User, SetUser] = useState({
        name: '',
        email: '',
        phone: ''
    })

    /**
     *  Lưu ý: phải sử dụng thuộc tính name="" cho thẻ input
     */
    const FormHandling = (e) => {
        SetUser({
            ...User,
            [e.target.name]: e.target.value
        })
    }

    return (
        <React.Fragment>
            <form>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={User.name} onChange={FormHandling} placeholder="Nhập tên"/>
                </div>
                <div>
                    <label>Email:</label>
                    <input type="text" name="email" value={User.email} onChange={FormHandling} placeholder="Nhập Email"/>
                </div>
                <div>
                    <label>phone:</label>
                    <input type="text" name="phone" value={User.phone} onChange={FormHandling} placeholder="Nhập SĐT"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </React.Fragment>
    )
}


const FormHandling = () => {
    return (
        <React.Fragment>
            <FullName></FullName><br />
            <LoginForm></LoginForm><br />
            <FormValid></FormValid><br />
            <UserInfomation></UserInfomation>
        </React.Fragment>
    )
}

export default FormHandling