import {  SETPRODUCT_LIST } from "./constant";


export const productData = (data = [], action) => {
    switch (action.type){
        
        case SETPRODUCT_LIST:
        console.warn("Product_list conditon" , action);
        return [...action.data]

        default:
            return data
    }
    
    }