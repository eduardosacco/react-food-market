
import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

function cartReducer(state, action) {
    if (action.type === 'ADD') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];

        let updatedItems;
        if (existingItem) {
            const updatedItem = {...existingItem, amount: existingItem.amount + action.item.amount};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }
        
        const updatedTotalAmount = state.totalAmount
            + action.item.price * action.item.amount;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if (action.type === 'REMOVE') {
        const existingItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingItem = state.items[existingItemIndex];

        let updatedItems;
        if (existingItem.amount > 1) {
            const updatedItem = {...existingItem, amount: existingItem.amount - 1};
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        
        const updatedTotalAmount = state.totalAmount - existingItem.price;

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if (action.type === 'CLEAR') {
        return defaultCartState;
    }

    return defaultCartState;
}

function CartProvider(props) {
    const [cartState, dispatchCartReducer] = useReducer(cartReducer, defaultCartState);

    function addItemHandler(item) {
        dispatchCartReducer({type:'ADD', item: item});
    }

    function removeItemHandler(id) {
        dispatchCartReducer({type:'REMOVE', id: id});
    }

    function clearCartHandler() {
        dispatchCartReducer({type: 'CLEAR'});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clear: clearCartHandler
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
