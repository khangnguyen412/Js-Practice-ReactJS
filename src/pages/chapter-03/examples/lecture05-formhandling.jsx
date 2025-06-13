/* eslint-disable */
import { data } from "jquery";
import React, { useEffect, useRef, useState } from "react";

const FullName = () => {
    const [Username, SetUsername] = useState('');
    return (
        <input type="text" value={Username} onChange={(e) => SetUsername(e.target.value)} placeholder="Nhập tên"></input>
    )
}

const FormHandling = () => {
    return (
        <React.Fragment>
            <FullName></FullName>
        </React.Fragment>
    )
}

export default FormHandling