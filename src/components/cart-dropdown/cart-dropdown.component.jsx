import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { useNavigate } from 'react-router-dom';


import { selectCartItems } from "../../redux/cart/cart.selectors";

import { toggleCartDropdown } from "../../redux/cart/cart.actions";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, dispatch }) => {
    const navigate = useNavigate();
    return(
    <div className='cart-dropdown'>
        <div className='cart-items'>
            { 
                cartItems.length > 0 ?
                cartItems.map(item => (
                    <CartItem key={item.id} item={item} />
                )) 
                :
                <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={() => {
            navigate('/checkout')
            dispatch(toggleCartDropdown())
        }}>GO TO CHECKOUT</CustomButton>
    </div>
)}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})


export default connect(mapStateToProps)(CartDropdown);