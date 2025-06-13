/* Import thư viện */
import React, { useEffect, useRef, useState } from "react"; // eslint-disable-line

const Home = () => {
    return (
        <React.Fragment>
            <p> Đây là trang Home</p>
        </React.Fragment>
    )
}
const About = () => {
    return (
        <React.Fragment>
            <p> Đây là trang About</p>
        </React.Fragment>
    )
}

const Conditional = () => {
    /**
     *  Bài 1: Hiển thị nội dung đăng nhập/đăng xuất
     *  - Cú pháp: 
     *      {isLoading ? <Spinner /> : <Content />} // Toán tử 3 ngôi
     *  - Tạo một button "Login"/"Logout" thay đổi trạng thái khi click.
     *  - Nếu đã đăng nhập (isLoggedIn = true), hiển thị thông báo "Welcome back!".
     *  - Nếu chưa đăng nhập, hiển thị nút "Login".
     */
    const [isLoggedIn, SetLoggin] = useState(false);

    /**
     *  Bài 2: Hiển thị thông báo lỗi
     *  - Cú pháp:
     *      {hasError && <ErrorAlert />}
     *  - Giải thích:
     *      + Nếu vế trái (showContent) là true, nó sẽ trả về vế phải (JSX element).
     *      + Nếu vế trái là false, nó sẽ bỏ qua vế phải và không render gì (trả về false, nhưng React không render false).
     *  - Khi người dùng nhập vào ô input, nếu nội dung rỗng → hiển thị thông báo "Vui lòng nhập dữ liệu".
     *  - Sử dụng && để kiểm tra điều kiện.
     */
    const [Value, SetValue] = useState('');
    const IsEmpty = Value.trim() === '';
    const CheckInput = (e) => SetValue(e.target.value)

    /**
     *  Bài 3: Hiển thị role-based UI
     *  - Giả sử có 3 loại người dùng: admin, user, guest.
     *  - Hiển thị nội dung khác nhau tùy theo role:
     *      - Admin: "Bạn có quyền quản trị"
     *      - User: "Xin chào người dùng!"
     *      - Guest: "Vui lòng đăng nhập"
     */
    const [Role, SetRole] = useState('Guest')
    const UpdateRole = (e) => SetRole(e.target.value)

    /**
     *  4. Hiển thị nhiều component cùng lúc
     *  - Bạn có thể phân tách UI thành nhiều phần và render từng phần theo điều kiện.
     */
    const [Tab, SetTabActive] = useState('Home')

    /**
     *  5. Hiển thị trạng thái tải người dùng
     */
    const [Users, GetUser] = useState([])
    const [Loading, SetLoading] = useState(true)
    const [Error, GetErr] = useState(null)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res =>{
            return res.json()
        }).then(data => {
            SetLoading(false)
            GetUser(data)
        }).catch(err => {
            SetLoading(false)
            GetErr('Lỗi')
        })
        
    }, [])

    return (
        <React.Fragment>
            {isLoggedIn ? (
                <React.Fragment>
                    <h1>Bạn đã đăng nhập</h1>
                    <button onClick={() => SetLoggin(false)}>Click vào đây để đăng xuất</button>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <div>Bạn chưa đăng nhập</div>
                    <button onClick={() => SetLoggin(true)}>Click vào đây để đăng nhập</button>
                </React.Fragment>
            )} <br />

            <input type="text" value={Value} onChange={CheckInput} placeholder="Nhập vào đây" />
            {IsEmpty && (
                <p style={{ color: 'red' }}>Vui lòng nhập dữ liệu!</p>
            )} <br />

            <select value={Role} onChange={UpdateRole}>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Guest">Guest</option>
            </select>
            {Role === 'Admin' && (<p>Bạn là admin</p>)}
            {Role === 'User' && (<p>Bạn là user</p>)}
            {Role === 'Guest' && (<p>Vui lòng đăng nhập</p>)} <br />

            <div>
                <button onClick={() => SetTabActive('Home')}>Home</button><br />
                <button onClick={() => SetTabActive('About')}>About</button><br />
            </div>
            {Tab === 'Home' && <Home></Home>}
            {Tab === 'About' && <About></About>} <br />

            {Users ? (
                <React.Fragment>
                    {Loading && (<p>Đang Tải..</p>)}
                    {Users && (
                        <ul>
                            {Users.map((user) => (
                                <li key={user.id}>{user.name}</li>
                            ))}
                        </ul>
                    )}
                </React.Fragment>
            ) : (
                <React.Fragment>
                    {Loading && (<p>Đang Tải..</p>)}
                    {Error && (<p>{Error}</p>)}
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default Conditional