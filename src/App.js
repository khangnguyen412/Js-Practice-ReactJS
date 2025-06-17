/* eslint-disable */
import React from "react";
import './App.css';
import { createBrowserRouter, RouterProvider, BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { LectureRoute } from "./routes/LectureRoute";

const routes = [...LectureRoute,]

const router = createBrowserRouter(routes);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );
}

export default App;
