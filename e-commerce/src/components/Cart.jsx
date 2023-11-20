import { useContext } from "react"
import cartContext from "../../context/cart/cart.context"
import CartLogo from "./logo/CartLogo"

function Cart() {
    const { cart, setCart, total } = useContext(cartContext)

    const removeCartItem = id => {
        setCart(prev => prev?.filter(product => product.id !== id))
    }

    return (
        <div className="h-full py-2 px-4 overflow-y-auto">
            <div className="w-full border-b-[1px] py-4 px-4 flex justify-between">
                <span className="text-2xl font-mono">Shopping Bag</span>
                <CartLogo />
            </div>
            <div className="pt-4">
                {
                    cart?.length !== 0? cart?.map(product => (
                        <div className="border-b-[1px] flex py-2 justify-around items-center text-emerald-600 font-sans" key={product.id}>
                            <span className="cursor-pointer" id={product.id} onClick={() => removeCartItem(product.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="red" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                            </span>
                            <img className="h-32 w-32" src={product?.image} alt={product?.title} />
                            <span>{product?.title.slice(0, 20)}</span>
                            <span>${product?.price}</span>
                        </div>
                    )): (
                        <span className="font-bold" key="no item">No item in the Cart</span>
                    )
                }
            </div>
            <div className="flex justify-between border-t-[1px] border-black p-2 text-slate-800">
                <span className="font-bold">Total</span>
                <span className="">${total}</span>
            </div>
            <div className="flex py-2 justify-end">
                <button className="bg-black text-slate-200 py-3 px-2" onClick={() => {alert('CheckoutSuccess'); setCart([])}}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart
