import Home from "./pages/Home"
import ProductProvider from "../context/products/ProductProvider"
import CartProvider from "../context/cart/CartProvider"

function App() {

  return (
    <ProductProvider>
      <CartProvider>
        <Home />
      </CartProvider>
    </ProductProvider>
  )
}

export default App
