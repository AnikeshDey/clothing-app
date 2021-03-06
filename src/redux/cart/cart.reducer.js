import { actionTypes } from './cart.types'

import { addItemToCart, removeItem } from './cart.utils'

const INITIAL_STATE = {
    hidden:true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case actionTypes.TOGGLE_CART:
            return {
                ...state,
                hidden: !state.hidden
            }
        case actionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)           
            }
        case actionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems: removeItem(state.cartItems, action.payload)           
            }
        case actionTypes.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload.id)           
            }
        default:
            return state;
    }
}


export default cartReducer;