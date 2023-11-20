import { useState } from "react"
import Cart from "./Cart"
import CartLogo from "./logo/CartLogo"

function Header() {
    const [showCart, setShowCart] = useState(false)
    
    return (
        <>
            <div className="w-full h-fit py-5 px-20 flex justify-between shadow-lg">
                <span>Logo</span>
                <div className="cursor-pointer" onClick={() => setShowCart(prev => !prev)}>
                    <CartLogo />
                </div>
            </div>
            <div className={`fixed top-0 left-0 h-full w-[70%] bg-amber-50 transition-transform duration-200 ${showCart? '-translate-x-[100%]': 'translate-x-[0%]'}`}>
                <Cart />
            </div>
        </>
    )
}

export default Header
