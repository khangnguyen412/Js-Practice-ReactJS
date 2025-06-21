/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

/**
 *  Các trạng thái khi gọi api
 *  - Có 3 trạng thái chính: 
 *      Loading: Đang chờ dữ liệu từ API
 *      Error: Có lỗi xảy ra khi gọi API
 *      Success: Thành công, đã nhận được dữ liệu
 */

/**
 *  Quản lý trạng thái với useState
 */
const Status = () => {
    /**
     *  Có 3 trạng thái cơ bản với useState
     */
    const [Data, SetData] = useState(null)
    const [Loading, SetLoading] = useState(false)
    const [Err, SetErr] = useState(null)
}

const StatusPost = () => {
    const [Data, SetData] = useState(null)
    const [Loading, SetLoading] = useState(true)
    const [Err, SetErr] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
                if (response.status !== 200) throw new Error(`Lỗi HTTP: ${response.status}`);
                SetData(response.data)
            } catch (err) {
                SetErr(err.message)
            } finally {
                SetLoading(false)
            }
        })();
    }, [])

    if (Loading) return <p>Đang tải dữ liệu...</p>;
    if (Err) return <p style={{ color: 'red' }}>Lỗi: {Err}</p>;
    return (
        <React.Fragment>
            <h1>Post 1</h1>
            {Data && (
                <div>
                    <h2>Title: {Data.title}</h2>
                    <p>Content: {Data.body}</p>
                </div>
            )}
        </React.Fragment>
    )
}

const StatusTodolist = () => {
    const [Data, SetData] = useState(null)
    const [Loading, SetLoading] = useState(true)
    const [Err, SetErr] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
                if (response.status !== 200) throw new Error('Lỗi HTTP: ', response.status)
                SetData(response.data)
            } catch (err) {
                SetErr(err.message)
            } finally {
                SetLoading(false)
            }
        })();
    }, [])

    if (Loading) return <p>Đang tải dữ liệu...</p>;
    if (Err) return <p style={{ color: 'red' }}>Lỗi: {Err}</p>;
    return (
        <React.Fragment>
            <h1>Todolist</h1>
            {Data && (
                <ul>
                    {Data.map(todo => (
                        <li key={todo.id} style={{ color: todo.completed ? 'green' : 'black' }}>
                            {todo.title} - {todo.completed ? '✅ Hoàn thành' : '❌ Chưa hoàn thành'}
                        </li>
                    ))
                    }
                </ul>
            )}
        </React.Fragment>
    );
}

const Conditional = () => {
    return (
        <React.Fragment>
            <StatusPost></StatusPost><br />
            <StatusTodolist></StatusTodolist><br />
        </React.Fragment>
    )
}

export default Conditional