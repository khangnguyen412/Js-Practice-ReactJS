/* eslint-disable */
import { data } from "jquery";
import React, { useEffect, useRef, useState } from "react";

/**
 *  Buổi 4: Render Danh Sách với .map() và key
 */

/**
 *  Render danh sách các phần tử
 *  - Trong React, bạn có thể render nhiều component từ một mảng bằng cách sử dụng .map().
 *  - Cú pháp:
 *      $ [biến].map((item, index) => ( <Component key={index} {...props} /> ))
 *  - key giúp React nhận diện phần tử nào thay đổi , thêm mới hay xóa đi
 *  - Nếu không dùng key, React có thể render sai hoặc gây lỗi hiệu suất
 */
const name = ['An', 'Bình', 'Chi']
const NameList = ({ name }) => {
    return (
        <ul>
            {name.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    )
}

/**
 *  Hiển thị dữ liệu động từ api
 *  - Bạn có thể kết hợp useState + useEffect để tải dữ liệu từ API và render bằng .map().
 */
const UserList = () => {
    const [Users, SetUsers] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => SetUsers(data))
    }, [])

    return (
        <ul>
            {Users.map(user => (
                <li key={user.id}> <strong>{user.name}</strong> - {user.email}</li>
            ))}
        </ul>
    )
}

/**
 *  Xóa hoặc cập nhật phần tử trong danh sách
 */
const TodoList = () => {
    const [Tasks, SetTasks] = useState([
        { id: 1, text: "Làm bài tập" },
        { id: 2, text: "Xem video" }
    ])

    const removeStask = (id) => {
        const NewTask = Tasks.filter(Task => Task.id !== id)
        // filter () => Hàm này không thay đổi mảng gốc , mà tạo ra một mảng mới chứa các phần tử thỏa mãn điều kiện.
        SetTasks(NewTask)
    }
    return (
        <React.Fragment>
            <ul>
                {Tasks.map((item) => (
                    <li key={item.id}>
                        {item.text}  -- <button onClick={() => { removeStask(item.id) }}>Xóa Task</button>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}

/**
 *  Sơ lượt về filter()
 *  - Là phương thức của array trong JavaScript, dùng để lọc các phần tử trong mảng dựa trên điều kiện trả về từ hàm callback.
 *  - Hàm này không thay đổi mảng gốc, mà tạo ra một mảng mới chứa các phần tử thỏa mãn điều kiện.
 *  - Cú pháp: 
 *      array.filter(callback(item, index, array), thisArg)
 *  - callback: hàm quyết định xem phần tử có được giữ lại không.
 *  - thisArg (tùy chọn): giá trị this khi gọi hàm callback
 */
const numbers = [10, 20, 30, 40, 50];
const Filtered = numbers.filter((number, index, arr) => {
    console.log('Số:', number);
    console.log('Vị trí:', index);
    console.log('Mảng gốc:', arr);
    return number % 2 === 0;
});

const Obj = { min: 25 }
const GetNum = numbers.filter(function (number) {
    return number > this.min
}, Obj)
console.log(GetNum)
/** Lưu ý: nếu sử dụng thisArg thì phải dùng functions(){} ko được dùng () => {} vì ko arrow function ko nhận được this */

/**
 *  To Do List đơn giản
 */
const TodoApp = () => {
    const AddTaskIP = useRef(null)
    const [Task, UpdateTask] = useState([])
    const [NewTask, UpdateNewTask] = useState('')

    useEffect(() => {
        const inputElement = AddTaskIP.current;
        if (!inputElement) return;
        inputElement.addEventListener('input', () => UpdateNewTask(AddTaskIP.current.value))
        return () => {
            inputElement.removeEventListener('input', () => UpdateNewTask(AddTaskIP.current.value))
        }
    })

    const AddTask = () => {
        if (NewTask.trim()) {
            const id = Date.now()
            UpdateTask([...Task, { id, text: NewTask }])
        }
    }

    const RemoveTask = (id) => {
        const NewTempTask = Task.filter(task => task.id !== id)
        UpdateTask(NewTempTask)
    }

    return (
        <React.Fragment>
            <input id="task" name="task" type="text" ref={AddTaskIP} placeholder="Nhập thêm việc cần làm"  />
            <button type="submit" onClick={AddTask}> Thêm </button>
            <ul>
                {Task.map((item) => (
                    <li key={item.id}>
                        {item.text}  -- <button onClick={() => { RemoveTask(item.id) }}>Xóa Task</button>
                    </li>
                ))}
            </ul>
        </React.Fragment>
    )
}

const RenderList = () => {
    return (
        <React.Fragment>
            <NameList name={name}></NameList> <br />
            <UserList></UserList> <br />
            <TodoList></TodoList> <br />
            <TodoApp></TodoApp> <br />
        </React.Fragment>
    )
}

export default RenderList