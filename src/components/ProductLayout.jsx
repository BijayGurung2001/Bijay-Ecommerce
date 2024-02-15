import React, { useContext } from 'react'
import ProductContext from '../Context/ProductContext'
import { Link } from 'react-router-dom'

const ProductLayout = () => {
    const {ProductData,isLoading ,isError}=useContext(ProductContext)
  return (
    <div>
        {isLoading && <h1>Loading</h1>}
        {!isLoading && isError && <h1>Error Occured</h1>}
        {!isLoading && !isError && ProductData.length>0 && 
        ProductData.map((product)=>{
            return(
                <div>
                    <Link to={(`/product/${product.id}`)}>
                        <img src={product.image} />
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