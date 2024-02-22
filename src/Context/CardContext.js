import { createContext, useContext, useReducer } from "react";

const CartContext=createContext();
const cartReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            
            return{
                ...state, 
                cartItems:[...state.cartItems, action.payload]
            };
            default:
                return state;
    };
};
const CartProvider =({props})=>{
    const [state, dispatch]=useReducer(cartReducer,{cartItems:[]})
    const addToCart=(items)=>{
        dispatch({type:'ADD_TO_CART', payload.item})

    }
    return(
        <CartContext.Provider value={{cartItems:state.cartItems, addToCart}}>
            {props.children}
        </CartContext.Provider>
    )
}
   
}
const useCart=()=>{
    const context=useContext(CartContext);
    if(!context){
        throw new Error('useCart must be used within a CartProvider');

    }
    return context;
}
export {CartProvider, useCart};