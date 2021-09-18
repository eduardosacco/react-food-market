import React, { useContext, useState } from 'react';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

function Cart(props) {
    const [isCheckout, setIsCheckout] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    function cartItemRemoveHandler(id) {
        cartCtx.removeItem(id);
    }

    function cartItemAddHandler(item) {
        cartCtx.addItem(item);
    }

    function checkoutHandler() {
        setIsCheckout(true);
    }

    async function submitOrderHandler(userData) {
        setIsSubmitting(true);

        const response = await fetch('https://pantuflas-nastita-default-rtdb.firebaseio.com/orders.json', {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                products: cartCtx.items
            })
        });

        //Implement error handling
        setIsSubmitting(false);
        setDidSubmit(true);

        cartCtx.clear();
    }

    const cartItems = cartCtx.items.map(item =>
        <CartItem key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onAdd={cartItemAddHandler.bind(null, { ...item, amount: 1 })}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
        />
    );
    const cartEmpty = cartItems.length === 0;
    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']}
                onClick={props.onHideCart}>Close</button>
            {!cartEmpty &&
                <button
                    className={classes.button}
                    onClick={checkoutHandler}
                >
                    Checkout
                </button>
            }
        </div>
    );

    const cartModalContent = (
        <React.Fragment>
            <ul className={classes['cart-items']}>
                {cartItems}
            </ul>
            <div className={classes.total}>
                <span>Total amount</span>
                <span>{totalAmount}</span>
            </div>
            {!isCheckout && modalActions}
            {isCheckout && <Checkout
                onSubmit={submitOrderHandler}
                onCancel={props.onHideCart}
            />}
        </React.Fragment>
    );

    const didSubmitModalContent = (
        <React.Fragment>
            <p>Order sent successfully!</p>
            <div className={classes.actions}>
                <button className={classes['button--alt']}
                    onClick={props.onHideCart}>Close</button>
            </div>
        </React.Fragment>
    );

    return (
        <Modal>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && <p>Submitting order...</p>}
            {didSubmit && didSubmitModalContent}
        </Modal>
    );
}

export default Cart
