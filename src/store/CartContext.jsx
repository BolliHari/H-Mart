import { createContext,useContext,useState } from "react";

const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    }

    const removeFromCart = (product) => {
        setCartItems(cartItems.filter(item => item.id!== product.id));
    }

    return(
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart =()=>{
    return useContext(CartContext);
}