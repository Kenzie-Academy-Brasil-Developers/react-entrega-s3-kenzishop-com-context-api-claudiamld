import Header from "../../components/Header"
import ProductCard from "../../components/ProductCard"
import { useProducts } from "../../providers/products/products"
import { useCart } from "../../providers/cart/cart"
import { Content } from "./styles"


const HomePage = () => {

    const {products} = useProducts()
    const {addToCart} = useCart()

    return(
        <div>
            <Header />
            <Content>
                {products.map((product, index) => (
                    <ProductCard 
                        key={index}
                        children="Adicionar ao carrinho"
                        click={() => addToCart(product)}
                        image={product.image}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </Content>
        </div>
    )
}
export default HomePage