import { useContext } from 'react';
import classes from './ProductItem.module.css';
import ProductItemForm from './ProductItemForm';
import CartContext from '../../../store/cart-context';

function ProductItem(props) {
    const cartCtx = useContext(CartContext);
    function addToCartHandler(amount) {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    }

    const price =  `$${props.price.toFixed(2)}`;

    return(
        <li>
            <div className={classes.product}>
                <h3>{props.name}</h3>
                <div className={classes.description}>
                    {props.description}
                </div>
                <div className={classes.price}>
                    {price}
                </div>
                <div>
                    <ProductItemForm id={props.id}
                        onAddToCart={addToCartHandler}
                    />
                </div>
            </div>
        </li>
    );
}

export default ProductItem;