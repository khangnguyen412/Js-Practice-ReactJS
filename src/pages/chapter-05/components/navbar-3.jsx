/* eslint-disable */
import React from "react";
import { Link, NavLink } from 'react-router-dom';

/**
 *  <NavLink> là gì?
 *  - Đây là component của react-router-dom, dùng để tạo link có thể tự động highlight khi đang ở trên đường dẫn đó
 */

const Navbar = ({id}) => {
    return (
        <React.Fragment>
            <nav style={{ padding: '10px', backgroundColor: '#f8f9fa' }}>
                <NavLink to={`/chapter5-lecture${id}/home`}  style={({ isActive }) => ({  padding: '10px', color: isActive ? 'red' : 'black' })}>Trang Chủ</NavLink>
                <NavLink to={`/chapter5-lecture${id}/users/123`}  style={({ isActive }) => ({  padding: '10px', color: isActive ? 'red' : 'black' })}>User Detail</NavLink>
            </nav>
        </React.Fragment>
    )
}
export default Navbar