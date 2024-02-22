import { useEffect, useState } from "react";


function useFetch(url){
    const[ProductData, setProductData]=useState([])
    const [isLoading, setIsLoading]=useState(true)
    const [isError, setIsError]=useState(false)
    
        useEffect( ()=>{
            const fetchdata=async()=>{
            try {
                const result=await fetch(url);
        const data=await result.json();
        setProductData(data)
        setIsLoading(false)
        
            } catch (error) {
                console.log('error in fetching api ')
                setIsLoading(true);
                setIsError(true)
            }
        }
            fetchdata()
        
        },[])
        return{ProductData, isLoading, isError}
    
    }
    export {useFetch}