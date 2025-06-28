/* eslint-disable */
import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

const ErrorPage = () => {
    /**
     *  Hook useNavigate()
     *  - Dùng để chuyển hướng người dùng đến route khác bằng code 
     *  - Cú pháp: 
     *      const navigate = useNavigate();
     *      navigate('/about'); 
     *      navigate(-1);       // Quay lại trang trước
     *      navigate(1);        // Tiến lên trang kế tiếp
     */
    const navigate = useNavigate()

    /**
     *  Hook useLocation()
     *  - Dùng để lấy thông tin về đường dẫn hiện tại, bao gồm: 
     *      + pathname
     *      + search
     *      + hash
     *      + state  (nếu  dùng navigate(..., { state }))
     */
    const location = useLocation();
    
    return (
        <React.Fragment>
            <div>
                <h1>Các hook của react-router-dom</h1>
                <h2>Hook useNavigate()</h2>
                <button onClick={() => { navigate('/chapter5-lecture1/home') }}>Click vào đây</button><br />

                <h2>Bạn đang ở: {location.pathname}</h2>
                <h2>Có query string: {location.search}</h2>
            </div>
        </React.Fragment>
    )
}
export default ErrorPage