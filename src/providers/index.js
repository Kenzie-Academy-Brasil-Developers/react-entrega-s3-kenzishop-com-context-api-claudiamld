import { CartProvider } from "./cart/cart"
import { ProductsProvider } from "./products/products"

const Providers = ({children}) => {
    return(
        <CartProvider>
            <ProductsProvider>{children}</ProductsProvider>
        </CartProvider>
    )
}
export default Providers