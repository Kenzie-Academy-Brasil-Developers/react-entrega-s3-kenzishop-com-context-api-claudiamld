import { createContext, useContext, useState } from "react";

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const removeFromCart = (id) => {
        const newCart = cart.filter(
            (itemCart) => itemCart.id !== id
        )
        setCart(newCart)
    }

    return(
        <CartContext.Provider
            value={{cart, addToCart, removeFromCart}}>
                {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext)