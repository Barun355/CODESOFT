import { useEffect } from "react"
import { useState } from "react"
import CartContext from "./cart.context"

function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)


    useEffect(() => {
        let total = 0;
        cart.map(product => total += product.price)
        setTotal(total)
    },  [cart, setCart])

    return (
        <CartContext.Provider value={{cart, total, setCart, setTotal}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartProvider
