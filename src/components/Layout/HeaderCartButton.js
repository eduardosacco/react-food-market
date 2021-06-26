import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext);
    const cartItemsCount = cartCtx.items.reduce((currCount, item) => {
        return currCount + item.amount;
    }, 0)

    return(
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {cartItemsCount}
            </span>
        </button>
    );
}

export default HeaderCartButton;