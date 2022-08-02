import { ADD_TO_CART, EMPTY_CART, REMOVE_TO_CART } from './constant';

export const cartData = (data = [], action) => {
    switch (action.type) {

        case ADD_TO_CART:
            console.warn("ADD_TO_CART condition ", action)
            return [action.data, ...data]

        case REMOVE_TO_CART:
            console.warn("REMOVE_TO_CART condition ", action);
            // data.length = data.length ? data.length - 1 : []
            const remaingItem = data.filter((item)=>item.id!==action.data);
            console.warn("RemaingData" , remaingItem);
            // const remaningdata = data.filter((item)=> item.id!==action.data)
            // console.warn("Reaming data", remaningdata);
            return [...remaingItem]

        case EMPTY_CART:
            console.warn("EMPTY CART condition ", action);
            data = []
            return [...data]
            
        default:
            return data
    }
}