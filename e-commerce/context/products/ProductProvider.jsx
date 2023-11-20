import { useState, useEffect } from "react";
import ProductContext from "./product.context"


const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState()

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProducts(json))
    }, [])

    return (
        <ProductContext.Provider value={{ products }}>
            { children}
        </ProductContext.Provider>
    )
}

export default ProductProvider