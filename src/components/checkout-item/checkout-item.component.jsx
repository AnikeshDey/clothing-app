import React from "react";

import { connect } from "react-redux";

import { removeItemFromCart, removeItem, addItem } from "../../redux/cart/cart.actions"

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, removeItemFromCart, addItem, removeItem }) => {
    const { name, imageUrl, quantity, price } = cartItem;
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">
                {name}
            </span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeItem(cartItem)}>&#10094;</div>
                <div className="value">{quantity}</div>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">
                {price}
            </span>
            <div onClick={() => removeItemFromCart(cartItem)} className="remove-button">&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItemFromCart: item => dispatch(removeItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);