import { Container } from "./styles"
import { useHistory } from "react-router-dom"

const Header = () => {

    const history = useHistory()

    const handleNavigation = () => {
        return history.push("/carrinho")
    }

    return(
        <Container>
            <h1>Kenzie Shop</h1> 
            <button onClick={() => handleNavigation()}>Carrinho</button>
        </Container>
    )
}
export default Header