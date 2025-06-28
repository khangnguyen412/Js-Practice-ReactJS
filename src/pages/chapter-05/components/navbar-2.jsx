/* eslint-disable */
import React from "react";
import { Link, NavLink } from 'react-router-dom';

/**
 *  <NavLink> là gì?
 *  - Đây là component của react-router-dom, dùng để tạo link có thể tự động highlight khi đang ở trên đường dẫn đó
 */

const Navbar = () => {
    return (
        <React.Fragment>
            <nav style={{ padding: '10px', backgroundColor: '#f8f9fa' }}>
                <NavLink to={"/chapter5-lecture2/home"}  style={({ isActive }) => ({  padding: '10px', color: isActive ? 'red' : 'black' })}>Trang Chủ</NavLink>
                <NavLink to={"/chapter5-lecture2/about"} style={({ isActive }) => ({  padding: '10px', color: isActive ? 'red' : 'black' })}>Giới Thiệu</NavLink>
                <NavLink to={"/chapter5-lecture2/contact"} style={({ isActive }) => ({  padding: '10px', color: isActive ? 'red' : 'black' })}>Liên Hệ</NavLink>
                <NavLink to={"/chapter5-lecture2/hook"} style={({ isActive }) => ({  padding: '10px', color: isActive ? 'red' : 'black' })}>Các Hook</NavLink>
            </nav>
        </React.Fragment>
    )
}
export default Navbar