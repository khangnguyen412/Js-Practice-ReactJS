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
const ContextAddStudent = () => {}
const ContextStudentList = () => {
    const { Students } = useContext(StudentContext)
    const RemoveStudent = () => {}
    return (
        <React.Fragment>
            {Students && (
                <ul>
                    {Students.map((student) => (
                        <li key={student.id}>{student.id} - {student.name} <button onClick={() => RemoveStudent}>Xóa Học Sinh</button></li>
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
                <ContextStudentList></ContextStudentList>
            </StudentProvider>
        </React.Fragment>
    )
}

export default Status