import { useEffect, useState } from 'react';
import classes from './AvailableProducts.module.css';
import ProductItem from './ProductItem/ProductItem';
import Card from '../UI/Card';

function AvailableProducts() {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://pantuflas-nastita-default-rtdb.firebaseio.com/products.json');    
            
            if (!response.ok) {
                throw new Error();
            }
            
            const responseData = await response.json();

            //firebase specific
            const loadedProducts = [];
            for (const key in responseData) {
                loadedProducts.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price,
                });
            }

            setProducts(loadedProducts);  
        };

        fetchProducts().catch(error => {
            setIsLoading(false);
            setHttpError("There was a problem when getting the products from the server. Please try again later...");
        });        
    }, []);

    if (isLoading) {
        return (
            <section className={classes.productsLoading}>
                <h1>Loading...</h1>
            </section>
        );
    }

    if (httpError) {
        return (
            <section className={classes.productsLoadingError}>
                <h1>{httpError}</h1>
            </section>
        );
    }

    const productsList = products.map(product => 
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

export default AvailableProducts;