/* eslint-disable */
import React, { useContext, useEffect, useRef, useState } from "react";
import { StudentContext, StudentProvider } from "../../../contexts/Context-Student";

/**
 *  Bài 5: Quản lý trạng thái toàn cục không dùng redux
 *  - Ưu điểm:
 *      + Với đa số ứng dụng vừa và nhỏ , bạn hoàn toàn có thể dùng useContext + useState để quản lý state toàn cục. 
 *      + Đơn giản hơn Redux rất nhiều
 *      + Không cần thêm thư viện bên ngoài (như redux, react-redux)
 *  - Nhược điểm:
 *      + Đơn giản hơn Redux rất nhiều
 *      + Không cần thêm thư viện bên ngoài (như redux, react-redux)
 */
const ContextStudentForm = () => {
    const { AddStudent } = useContext(StudentContext)
    const [StudentInfo, SetStudentInfo] = useState({})
    const HandleAddStundent = (e) => {
        e.preventDefault()
        SetStudentInfo({...StudentInfo, id: new Date().getTime()})
        AddStudent(StudentInfo)
    }
    return (
        <React.Fragment>
            <form action="" onSubmit={HandleAddStundent} >
                <div><input type="text" onChange={(e) => SetStudentInfo({...StudentInfo, name: e.target.value})} placeholder="Nhập Tên"/></div>
                <div><input type="text" onChange={(e) => SetStudentInfo({...StudentInfo, username: e.target.value})} placeholder="Nhập Username"/></div>
                <div><input type="text" onChange={(e) => SetStudentInfo({...StudentInfo, email: e.target.value})} placeholder="Nhập Email"/></div>
                <div><button type="submit">Đăng Ký</button></div>
            </form>
        </React.Fragment>
    )
}
const ContextStudentList = () => {
    const { Students, RemoveStudent } = useContext(StudentContext)
    return (
        <React.Fragment>
            {Students && (
                <ul>
                    {Students.map((student) => (
                        <li key={student.id}>{student.id} - {student.name} - <button onClick={() => RemoveStudent(student.id)}>Xóa Học Sinh</button></li>
                    ))}
                </ul>
            )}
        </React.Fragment>
    )
}

const Status = () => {
    return (
        <React.Fragment>
            <StudentProvider>
                <ContextStudentForm></ContextStudentForm>
                <ContextStudentList></ContextStudentList>
            </StudentProvider>
        </React.Fragment>
    )
}

export default Status