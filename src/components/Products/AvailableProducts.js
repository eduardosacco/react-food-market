import classes from './AvailableProducts.module.css';
import ProductItem from './ProductItem/ProductItem';
import Card from '../UI/Card';

function AvailableProducts() {
    const productsList = DUMMY_PRODUCTS.map(product => 
        <ProductItem key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
        />
    );

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
        name: 'Beef Jerky',
        description: 'Finest meat spiced and desiccated.',
        price: 22.99,
    },
    {
        id: '2',
        name: 'Dried Tomatos',
        description: 'Organic and sun dried!',
        price: 16.5,
    },
    {
        id: '3',
        name: 'Barbecue Sauce',
        description: 'Hikory Smoke',
        price: 12.99,
    },
    {
        id: '4',
        name: 'Sriracha Sauce',
        description: 'Spicy chillies and garlic.',
        price: 18.99,
    },
];

export default AvailableProducts;