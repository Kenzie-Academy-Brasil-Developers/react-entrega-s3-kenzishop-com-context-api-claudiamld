import { useCart } from "../../providers/cart/cart"
import Header from "../../components/Header"
import ProductCard from '../../components/ProductCard'
import CartTotal from "../../components/CartTotal"
import { Content } from "./styles"

export const Cart = () => {

    const {cart, removeFromCart} = useCart()

    return(
        <div>
            <Header />
            <CartTotal />
            <Content>
                {cart.map((product, index) => (
                    <ProductCard 
                        key={index}
                        children="Remover do carrinho"
                        click={() => removeFromCart(product.id)}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                        id={product.id}
                    />
                ))}
            </Content>
        </div>

    )
}
export default Cart