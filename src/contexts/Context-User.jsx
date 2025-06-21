/* eslint-disable */
import React, { useState, createContext } from "react";

export const UserContext = createContext(); // Tạo context rỗng

export const UserProvider = ({ children }) => {
    const [User, SetUser] = useState(null)

    return (
        // User, SetUser được ném vào biết UserContext
        <UserContext.Provider value={{ User, SetUser }}>
            {children}
        </UserContext.Provider>
    )
}