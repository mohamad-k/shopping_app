
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,GET_ALL_ITEMS} from './action-types/cart-actions'
import axios from "axios"
//add cart action
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
        id
    }
}
//remove item action
export const removeItem=(id)=>{
    return{
        type: REMOVE_ITEM,
        id
    }
}
//subtract qt action
export const subtractQuantity=(id)=>{
    return{
        type: SUB_QUANTITY,
        id
    }
}
//add qt action
export const addQuantity=(id)=>{
    return{
        type: ADD_QUANTITY,
        id
    }
}
export const getItems =()=> {
    return dispatch => axios
    .get("/api/products").then(res =>{ dispatch({type: GET_ALL_ITEMS,
        payload:res.data.express}) }).catch(err => console.log(err))
}
