import { createContext, useContext, useState } from "react";
import BreakingBad from '../../assets/bb.jpg'
import FightClub from '../../assets/fight-club.jpg'
import PulpFiction from '../../assets/pulp-fiction.jpg'
import MiaWallace from '../../assets/tarantino.jpg'

export const ProductsContext = createContext();

export const ProductsProvider = ({children}) => {
   
    const [products] = useState([      
        { id: 1, image: BreakingBad , name: "Quadro Breaking Bad", price: 20.59},
        { id: 2, image: FightClub , name: "Quadro Fight Club", price: 20.59},
        { id: 3, image: PulpFiction , name: "Quadro Pulp Fiction", price: 20.59},
        { id: 4, image: MiaWallace , name: "Quadro Mia Wallace", price: 20.59},
    ])
  

    return(
        <ProductsContext.Provider
            value={{products}}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export const useProducts = () => useContext(ProductsContext);