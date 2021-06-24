import React from 'react';
import ProductsSummary from './ProductsSummary';
import AvailableProducts from './AvailableProducts';

function Products() {
    return(
        <React.Fragment>
            <ProductsSummary />
            <AvailableProducts />
        </React.Fragment>
    );
}

export default Products;