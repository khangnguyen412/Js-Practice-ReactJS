/* eslint-disable */
import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext(); // tạo context rỗng

export const CartProvider = ({ children }) => {
    const Products = [
        { id: 1, name: 'phone11' },
        { id: 2, name: 'phone12' },
        { id: 3, name: 'phone13' },
        { id: 4, name: 'phone14' },
    ]
    const [Cart, SetCart] = useState([])

    const AddToCart = (item) => {
        SetCart([...Cart, {
            id: new Date().getTime()+"-"+item.id,
            name: item.name,
        }])
    }

    const RemoveCart = (id) => {
        const NewCart = Cart.filter(cart => cart.id !== id)
        SetCart(NewCart)
    }
    
    useEffect(() => {
        Cart.map(index => {
            console.log(index)
        })
    }, [Cart])

    return (
        // Cart, AddToCart, RemoveCart được đưa vào CartContext
        <CartContext.Provider value={{ Products, Cart, AddToCart, RemoveCart }}>
            {children}
        </CartContext.Provider>
    )
}