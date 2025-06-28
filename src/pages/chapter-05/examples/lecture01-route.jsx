/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Router, Routes, Route } from "react-router-dom";

/**
 *  Component
 */
import Navbar from '../components/navbar-1';

/**
 *  Pages
 */
import Home from './../pages/home';
import About from './../pages/about';
import Contact from '../pages/contact';
import ErrorPage from '../pages/hook';

/**
 *  Cài đặt & cấu hình react router
 *  - Chạy lệnh và cài đặt file cho dự án: npm install react-router-dom
 */


const RouteFunction = () => {
    return (
        <React.Fragment>
            <div>
                <Navbar></Navbar><hr />
                {/* Muốn cấu hình thêm route con, phải kết nối với route bên ngoài (src/routes/LectureRoute.jsx) */}
                <Routes>
                    <Route path="/home" element={<Home></Home>} index></Route>
                    <Route path="/about" element={<About></About>}></Route>
                    <Route path="/contact" element={<Contact></Contact>}></Route>
                    <Route path="/hook" element={<ErrorPage></ErrorPage>}></Route>
                </Routes>
            </div>
        </React.Fragment>
    )
}

export default RouteFunction