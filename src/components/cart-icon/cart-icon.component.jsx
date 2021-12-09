import React from "react";

import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { selectCartItemCount } from '../../redux/cart/cart.selectors';

import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';

import { toggleCartDropdown } from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss';


const CartIcon = ({ toggleCartDropdown, itemCount }) => (
    <div className='cart-icon' onClick={toggleCartDropdown}>
        <ShoppingBag className='shopping-icon' />
        <span className='item-count'>{ itemCount }</span>
    </div>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemCount
})


const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);