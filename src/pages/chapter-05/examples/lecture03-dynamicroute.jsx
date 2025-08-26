/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Outlet, Routes, Route } from "react-router-dom";

/**
 * Component
 */
import Navbar from "../components/navbar-3";

const DynamicRoute = () => {
    return (
        <React.Fragment>
            <Navbar id={3}></Navbar>
            <Outlet></Outlet>
        </React.Fragment>
    )
}

export default DynamicRoute
