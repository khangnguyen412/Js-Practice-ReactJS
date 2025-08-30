/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetUser } from "../redux/slice/lecture05-asyncthunk";

const LectureFunction = () => {
    const dispatch = useDispatch();
    const { list_user, loading, error } = useSelector(state => state.lecture5);

    /**
     * Gọi action GetUser trong extraReducers của createSlice
     * Hàm GetUser() phải khớp với tên extraReducers trong createSlice
     */
    useEffect(() => {
        dispatch(GetUser());
    }, [dispatch])

    if(loading){
        return <p>Loading...</p>;
    }

    if(error){
        return <p>Error: {error}</p>;
    }

    return (
        <React.Fragment>
            <h1>List User</h1>
            <ul>
                {list_user.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}

export default LectureFunction