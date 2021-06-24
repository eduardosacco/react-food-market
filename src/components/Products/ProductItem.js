import classes from './ProductItem.module.css';

function ProductItem(props) {
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
            </div>
        </li>
    );
}

export default ProductItem;