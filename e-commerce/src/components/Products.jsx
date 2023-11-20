import { useContext } from "react"
import cartContext from "../../context/cart/cart.context"
import productContext from "../../context/products/product.context"


function Products() {
    const { products } = useContext(productContext)
    const { cart, setCart } = useContext(cartContext)

    const handleCart = (product) => {
        setCart([...cart, {...product}])
    }

    return (
        <>
            <div className="flex justify-center items-center py-5">
                <span className="text-2xl text-slate-800 font-mono">Products</span>
            </div>
            <div className="flex flex-wrap gap-5 md:gap-12 justify-center">
                {
                    products && products?.map(product => (
                        <div key={product.id} className="w-52 h-fit overflow-hidden border shadow-md flex flex-col items-center">
                            <img className="w-32 h-32 p-1" src={product.image} alt={product.title} />
                            <div className="flex flex-col items-center space-y-5 py-2 mt-2">
                                <span className="text-slate-900 block uppercase">{product.category}</span>
                                <span className="text-stone-400 text-sm block">${product.price}</span>
                                <span className="text-stone-400 font-mono text-lg block text-center px-2">{product.title.slice(0, 20)}</span>
                            </div>
                            <button className="w-full py-4 px-2 bg-slate-900 text-white font-sans" onClick={() => handleCart(product)}>Add to cart</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Products
