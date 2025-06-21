/* eslint-disable */
import React, { useEffect, useRef, useState, useContext } from "react";
import { UserContext, UserProvider } from "../../../contexts/Context-User";
import { CartContext, CartProvider } from "../../../contexts/Context-Cart";

/**
 *  useContext là gì?
 *  - useContext là một React Hook giúp bạn truyền dữ liệu qua nhiều tầng component mà không cần dùng props 
 */
const ContextLogin = () => {
    const { SetUser } = useContext(UserContext)
    const [Name, SetName] = useState('')
    const HandleLogin = () => {
        SetUser(Name)
    }
    return (
        <React.Fragment>
            <div>
                <input value={Name} onChange={(e) => SetName(e.target.value)} placeholder="Nhập tên" />
                <button onClick={HandleLogin}>Đăng nhập</button>
            </div>
        </React.Fragment>
    )
}
const ContextProfile = () => {
    const { User } = useContext(UserContext)
    return (
        <React.Fragment>
            <div>
                {User ? <p>Xin chào, {User}</p> : <p>Bạn chưa đăng nhập</p>}
            </div>
        </React.Fragment>
    )
}

/**
 *  Bài 2: Tạo CartContext để quản lý giỏ hàng
 *  - Mỗi sản phẩm có tên, giá
 *  - Có chức năng thêm/xóa sản phẩm ra khỏi giỏ hàng
 */
const ContextAddToCart = ({ item }) => {
    const { AddToCart } = useContext(CartContext)
    return (
        <React.Fragment>
            <button type="button" onClick={() => AddToCart(item)}>Add To Cart</button>
        </React.Fragment>
    )
}
const ContextCartList = () => {
    const { Products, Cart, RemoveCart } = useContext(CartContext)
    return (
        <React.Fragment>
            <span>Sản Phẩm</span>
            {Products && (
                <ul>
                    {Products.map((item) => (
                        <li key={item.id}>
                            {item.id} - {item.name} - <ContextAddToCart item={item}></ContextAddToCart>
                        </li>
                    ))}
                </ul>
            )}
            <span>Giỏ Hàng</span>
            {Cart && (
                <ul>
                    {Cart.map((item) => (
                        <li key={item.id}>
                            {item.id} - {item.name} - <button onClick={() => RemoveCart(item.id)}>Xóa Sản Phẩm</button>
                        </li>
                    ))}
                </ul>
            )}
        </React.Fragment>
    )
}

const RenderList = () => {
    return (
        <React.Fragment>
            <UserProvider>
                <ContextLogin></ContextLogin>
                <ContextProfile></ContextProfile>
            </UserProvider><br />

            <CartProvider>
                <ContextCartList></ContextCartList>
            </CartProvider><br />
        </React.Fragment>
    )
}

export default RenderList