import React from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';

function Cart(props) {
    const cartItems = [{id: 'c1', name:'Cacona', price: 12.99, amount: 2}]
        .map(item => <li key={item.id}>{item.name}</li>)
    return (
        <Modal>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total amount</span>
                <span>55.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}
                    onClick={props.onHideCart}>Close</button>
                <button className={classes.button}>Checkout</button>
            </div>
        </Modal>
    )
}

export default Cart
