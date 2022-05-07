import ProductList from "../../components/ProductList"
import Header from "../../components/Header"


const HomePage = () => {

    return(
        <div>
            <Header />
            <ProductList list={catalog} />
        </div>
    )
}
export default HomePage