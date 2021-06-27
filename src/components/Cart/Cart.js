import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';

function Cart(props) {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    function cartItemRemoveHandler(id) {
        cartCtx.removeItem(id);
    }

    function cartItemAddHandler(item) {
        cartCtx.addItem(item);
    }

    const cartItems = cartCtx.items.map(item =>
        <CartItem key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, {...item, amount: 1})}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
    );
    const cartEmpty = cartItems.length === 0;

    return (
        <Modal>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']}
                    onClick={props.onHideCart}>Close</button>
                    {!cartEmpty && <button className={classes.button}>Checkout</button>}
            </div>
        </Modal>
    );
}

export default Cart
