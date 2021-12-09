import { actionTypes } from './cart.types'

export const toggleCartDropdown = () => ({
    type: actionTypes.TOGGLE_CART
})

export const addItem = (item) => ({
    type: actionTypes.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: actionTypes.REMOVE_ITEM,
    payload: item
})

export const removeItemFromCart = (item) => ({
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    payload: item
})