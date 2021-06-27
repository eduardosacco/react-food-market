
import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

function cartReducer(state, action) {
    if (action.type === 'ADD') {
        // not sure this logic takes into acount adding items with same id several times
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount
            + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return defaultCartState;
}

function CartProvider(props) {
    const [cartState, dispatchCartReducer] = useReducer(cartReducer, defaultCartState);

    function addItemHandler(item) {
        dispatchCartReducer({type:'ADD', item: item});
    }

    function removeItemHandler(id) {
        dispatchCartReducer({type:'REMOVE', item: id});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
