import Button from '../Button'
import { Container } from './styles';

const ProductList = ({list}) => {
    
    return(
        <Container>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        <img src={item.image} alt=""/>
                        <h1>{item.name}</h1>
                        <Button item={item} />
                    </li>
                ))}
            </ul>
        </Container>
    )
}
export default ProductList