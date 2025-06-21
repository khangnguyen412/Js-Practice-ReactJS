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
                if(!response.status) throw new Error("Lỗi http: ", response.statusText)
                SetStudent(response.data)
            } catch (err) {
                console.log(err.message)
            }
        })()
    }, [])

    useEffect(() => {
        console.log(Students)
    }, [Students])

    return (
        <StudentContext.Provider value={{ Students, SetStudent }}>
            {children}
        </StudentContext.Provider>
    )
}