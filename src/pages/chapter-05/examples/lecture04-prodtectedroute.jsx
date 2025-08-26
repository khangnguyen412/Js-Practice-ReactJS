/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

/**
 * Protected Routes (Route có điều kiện)
 */
import Navbar from "../components/navbar-3";

const ProtectRoute = () => {
    return (
        <React.Fragment>
            <Navbar id={4}></Navbar>
            <Outlet></Outlet>
        </React.Fragment>
    )
}

export default ProtectRoute