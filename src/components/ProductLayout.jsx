import React, { useContext } from 'react'
import { ProductContext } from '../Context/ProductContext'
import { Link } from 'react-router-dom'


const ProductLayout = () => {
    const {ProductData, isError, isLoading}=useContext(ProductContext);
    console.log(ProductData);
   
      if (!ProductData || ProductData.length === 0) {
        return <h1>No data available</h1>;
      }
    
  return (
    <div>
        {isLoading && <h1>Loading</h1>}
        {!isLoading && isError && <h1>Error Occured</h1>}
        {!isLoading && !isError && ProductData.length>0 &&
        ProductData.map((product)=>{
            return(
                <div key={product.id}>
                    <Link to={(`/product/${product.id}`)}>
                        <img src={product.image} alt={product.title}/>
                        <br/ >
                        <h2>{product.title}</h2>
                        
                        <h3>{product.price}</h3>
                        <button>Add to card</button>
                    </Link>
</div>
            )
        })
        }
    </div>
  )
}

export default ProductLayout