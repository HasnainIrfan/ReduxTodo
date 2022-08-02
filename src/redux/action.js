import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from "./constant";

export const addToCart = (data) => {
    console.warn('Action is Called', data);
    return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data)=>{
    console.warn('Remover Action is Called' , data);
    return{
        type: REMOVE_TO_CART,
        data
    }
}

export const emptyCart = ()=>{
    console.warn('Empty Cart');
    return{
        type: EMPTY_CART
    }
}