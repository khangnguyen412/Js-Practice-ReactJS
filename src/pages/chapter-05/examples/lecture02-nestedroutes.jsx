/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Outlet, Routes, Route } from "react-router-dom";

/**
 *  Component
 */
import Navbar from "../components/navbar-2";

/**
 *  Page
 */
import Home from "../pages/home";
import About from "../pages/about";
import Contact from "../pages/contact";
import Hook from "../pages/hook";


/**
 *  Nested routes là gì?
 *  Là cách bạn tổ chức điều hướng thành nhóm có cùng tiền tố , ví dụ: 
 *  /blog
 *  /blog/1
 *  /blog/2
 *  /admin
 *  /admin/users
 *  /admin/settings
 */
const NestedRoute = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Routes>
                {/* Các Route được bắt đầu từ /chapter5-lecture2/  */}
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
                <Route path="/hook" element={<Hook></Hook>}></Route>
            </Routes>
        </React.Fragment>
    )
}

/**
 *  Cấu trúc cơ bản với <Outlet>
 *  Outlet sẽ đem tất cả các component con (children: []) của dynamic route vào bên trong và render thông qua thẻ <Outlet></Outlet>
 */
const OutletRoute = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </React.Fragment>
    )
}


const NestedRouteFunction = () => {
    return (
        <React.Fragment>
            <NestedRoute></NestedRoute>
            <OutletRoute></OutletRoute>
        </React.Fragment>
    )
}

export default NestedRouteFunction