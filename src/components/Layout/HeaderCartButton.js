import React, { useContext, useEffect, useState } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

function HeaderCartButton(props) {
    const cartCtx = useContext(CartContext);
    const [btnAnimating, setBtnAnimating] = useState(false);

    const cartItemsCount = cartCtx.items.reduce((currCount, item) => {
        return currCount + item.amount;
    }, 0);

    //Cart bump animation logic
    const btnClasses = `${classes.button} ${btnAnimating ? classes.bump : '' }`;
    useEffect( () => {
        if (cartCtx.items.length === 0) {
            return;
        }
        setBtnAnimating(true);
        const timer = setTimeout(() => {
            setBtnAnimating(false);
        }, 300);

        //Cleanup fn runs if component is removed
        return () => {
            clearTimeout(timer);
        }
    }, [cartCtx.items]);

    return(
        <button className={btnClasses} onClick={props.onClick}>
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