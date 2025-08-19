/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Outlet, Routes, Route } from "react-router-dom";

/**
 * Component
 */
import Navbar from "../components/navbar-3";

/**
 * Page
 */
import Home from "../pages/home";


const DynamicRoute = () => {
    return (
        <React.Fragment>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </React.Fragment>
    )
}

export default DynamicRoute
