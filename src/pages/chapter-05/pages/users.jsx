/* eslint-disable */
import React from "react";
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const UsersPage = () => {
    /**
     * Phải lấy đúng Route parameter (users/:id) trên url
     */
    const {id} = useParams();
    
    return (
        <React.Fragment>
            <div>
                <h1>Users Page</h1>
                <p>Lấy id user có tham số: {id}</p>
            </div>
        </React.Fragment>
    )
}
export default UsersPage