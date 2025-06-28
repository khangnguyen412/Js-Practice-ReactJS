/* eslint-disable */
import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [Students, SetStudent] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users')
                if (!response.status) throw new Error("Lỗi http: ", response.statusText)
                SetStudent(response.data)
            } catch (err) {
                console.log(err.message)
            }
        })()
    }, [])

    const AddStudent = (item) => {
        if(item.id && item.name){
            SetStudent([...Students, {
                id: item.id,
                name: item.name,
                username: item.username,
                email: item.email,
            }])
        }else{
            console.log("Không có thông tin")
        }
    }

    const RemoveStudent = (id) => {
        const NewStudentList = Students.filter(item => item.id !== id)
        SetStudent(NewStudentList)
    }

    return (
        <StudentContext.Provider value={{ Students, SetStudent, AddStudent, RemoveStudent }}>
            {children}
        </StudentContext.Provider>
    )
}