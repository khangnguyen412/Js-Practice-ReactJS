/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

const buttonStyle = {
    padding: "10px 20px",
    margin: "5px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
}

const UseFormFunction = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const OnSubmit = (data) => {
        console.log(data);
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit(OnSubmit)}>
                <div>
                    <label>Email: </label>
                    <input type="email" {...register("email", { required: "Email là bắt buộc" })} />
                    {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" {...register("password", { required: "Password là bắt buộc" })} />
                    {errors.password && <p style={{ color: "red" }}>{errors.password.message}</p>}
                </div>
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>
        </React.Fragment>
    )
}

export default UseFormFunction
