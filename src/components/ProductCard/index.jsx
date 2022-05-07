import {removeFromCartThunk, addToCartThunk} from '../../store/modules/cart/thunks'
import { Container } from "./styles";

const ProductCard = ({product, isRemovable = false}) => {

    const {id, name, price, image} = product;

    return(
        <div>
            estou aqui
        </div>
        // <Container>
        //     <img src={image} alt="imagem" />
        //     <h3>{name}</h3>
        //     <h3>R$ {price}</h3>
        //     {isRemovable ? (
        //         <button onClick={() => dispatch(removeFromCartThunk(id))}>Remover item do carrinho</button>
        //         ) : (
        //         <button onClick={() => dispatch(addToCartThunk(product))}>Adicionar item ao carrinho</button>
        //     )}
        // </Container>

    )
}
export default ProductCard