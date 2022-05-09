import { Container } from "./styles"
import { CartContext } from "../../providers/cart/cart"
import { useContext } from "react"

const CartTotal = () => {

    const {cart} = useContext(CartContext)

    const sum = cart.reduce((acc, currValue) => currValue.price + acc, 0)

    return(
        <Container>
            <h1>Total do pedido: R${sum}</h1>
        </Container>
    )
}
export default CartTotal