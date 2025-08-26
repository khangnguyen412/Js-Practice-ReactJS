/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';

const RedirectRoute = () => {
    /**
     * Gọi navigate để redirect
     */
    const navigate = useNavigate();

    /**
     * Redirect khi click button
     */
    const handleRedirect = () => {
        navigate('/');
    }

    return (
        <React.Fragment>
            <h1>Redirect Route</h1>
            <button onClick={handleRedirect}>Redirect</button>
        </React.Fragment>
    )
}

export default RedirectRoute