import { Container } from "./styles";

const ProductCard = ({id, image, name, price, click, children}) => {

    return(
        <Container>
            <img src={image} alt="imagem" />
            <h3>{name}</h3>
            <h3>R$ {price}</h3>
            <button onClick={click}>{children}</button>
        </Container>

    )
}
export default ProductCard