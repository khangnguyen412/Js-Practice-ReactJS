/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 *  REST (Representational State Transfer) là một giao thức giúp các ứng dụng giao tiếp với server. 
 *  - https://jsonplaceholder.typicode.com/posts – API giả lập cho bài viết
 *  - https://jsonplaceholder.typicode.com/users – API giả lập cho người dùng
 *  - https://api.github.com/users – API chính thức của GitHub
 */

/**
 *  Gọi API vói cú pháp fetch
 */
const FetchApiPost = () => {
    const [Posts, SetPostData] = useState([])
    const [Loading, SetLoading] = useState(null)
    const [Err, SetError] = useState(null)
    useEffect(() => {
        (async () => {
            SetLoading(true)
            SetError(null)
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                if (!response) throw new Error('Lỗi fetch api')
                const data = await response.json()
                SetPostData(data)
            } catch (error) {
                SetError(error)
            } finally {
                SetLoading(false)
            }
        })()
    }, [])
    return (
        <React.Fragment>
            {Loading && (<p>Đang tải...</p>)}
            {Err && (<p> {Err} </p>)}
            {Posts && (
                <React.Fragment>
                    <span>---- Post data ----</span>
                    <ul>
                        {Posts.map((post) => (
                            <li key={post.id}> {post.id} - {post.title} </li>
                        ))}
                    </ul>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

/**
 *  Axios: 
 *  - Là một thư viện JS để gọi API, hỗ trợ Promise.
 *  - Mỗi lần gọi axios.get(), axios.post()... → đều trả về một Promise.
 *  - Axios có trả về Promise không? Có – bạn không cần dùng .then() nếu dùng async/await
 *  - Có tự động parse JSON không? Tự động parse JSON
 *  - Có support timeout không? Dễ dàng thiết lập thời gian chờ
 *  - Có support cancel request không? Có thể hủy request dễ dàng
 *  - Có support HTTP methods mạnh mẽ hơn không? Hỗ trợ nhiều method hơn (GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS)
 *  
 *  Gọi API vói cú pháp axios
 */
const AxiosApiUser = () => {
    const [Users, SetUsersData] = useState([])
    const [Loading, SetLoading] = useState(null)
    const [Err, SetError] = useState(null)
    useEffect(() => {
        SetLoading(true)
        SetError(null)
        try {
            (async () => {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                if (!response) throw new Error('Không lấy đc response')
                SetUsersData(response.data)
            })()
        } catch (e) {
            SetError(e)
        } finally {
            SetLoading(false)
        }
    }, [])
    return (
        <React.Fragment>
            {Loading && (<p>Đang tải...</p>)}
            {Err && (<p> {Err} </p>)}
            {Users.length > 0 && (
                <React.Fragment>
                    <span>---- User data ----</span>
                    <ul>
                        {Users.map((user) => (
                            <li key={user.id}> {user.id} - {user.name} - {user.email}</li>
                        ))}
                    </ul>
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

function AxiosFunc() {

    return (
        <React.Fragment>
            <FetchApiPost></FetchApiPost><br />
            <AxiosApiUser></AxiosApiUser><br />
        </React.Fragment>
    )
}

export default AxiosFunc