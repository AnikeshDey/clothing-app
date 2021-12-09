export const addItemToCart = (cartItems, itemToAddInCart) => {
    const existingItem = cartItems.find(item => item.id === itemToAddInCart.id);

    if(existingItem){
        return cartItems.map(item =>{
            if(item.id === itemToAddInCart.id){
                return {
                    ...item,
                    quantity: item.quantity + 1
                }
            } else {
                return item;
            }
        })
    }

    return [...cartItems, {...itemToAddInCart, quantity: 1}];
}

export const removeItem = (cartItems, itemToRemoveFromCart) => {
    const existingItem = cartItems.find(item => item.id === itemToRemoveFromCart.id);

    if(existingItem.quantity > 1){
        return cartItems.map(item =>{
            if(item.id === itemToRemoveFromCart.id){
                return {
                    ...item,
                    quantity: item.quantity - 1
                }
            } else {
                return item;
            }
        })
    }

    return cartItems.filter(item => item.id !== itemToRemoveFromCart.id);
    //return [...cartItems, {...itemToAddInCart, quantity: 1}];
}