import { createContext, useContext } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductContext= createContext({});

export function ProductProvider(props){
    const {productData, isLoading, isError}=useFetch("https://fakestoreapi.com/products")
    return(
        <ProductProvider.Provider value={{productData, isLoading, isError}}>
            {props.children}
        </ProductProvider.Provider>
    )
}
export const useProductContext=()=>{
    return useContext(ProductContext)
}