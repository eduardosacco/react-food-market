import classes from './AvailableProducts.module.css';
import ProductItem from './ProductItem';
import Card from '../UI/Card';

function AvailableProducts() {
    const productsList = DUMMY_PRODUCTS.map(product => 
        <li>
            <ProductItem key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
            />
        </li>);

    return (
        <section className={classes.products}>
            <Card>
                <ul>{productsList}</ul>
            </Card>
        </section>
    );
}

const DUMMY_PRODUCTS = [
    {
        id: '1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: '2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: '3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: '4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

export default AvailableProducts;