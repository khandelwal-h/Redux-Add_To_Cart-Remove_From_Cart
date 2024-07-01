import { ADD_TO_CART,REMOVE_TO_CART } from '../constants'
const initialState = {
    cardData: []  // get data from action.js add to cart data like mobile img price 
}// [] isko array isliye rakha kuki ismo or bhi items add honge
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
             //console.warn("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
            

            case REMOVE_TO_CART:
                //console.warn("reducer",action)
                state.pop();
               return [
                   ...state,
                  
               ]
        default:
            return state
    }


}
