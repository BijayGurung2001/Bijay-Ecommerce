import React from 'react'

const ProductDetailsLayout = () => {
    const {productID}=useParams();
    const {ProductData, isError, isLoading}=useFetch(`https://fakestoreapi.com/products/${productID}`);
    const CustomButton = styled(Button)({
        borderRadius: "10px",
          color: "white",
          width: "200px",
          marginTop: "10px"
      });
  return (
    <div>

    </div>
  )
}

export default ProductDetailsLayout