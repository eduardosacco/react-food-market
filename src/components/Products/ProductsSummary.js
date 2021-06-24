import classes from './ProductsSummary.module.css';

function ProductsSummary() {
    return(
        <section className={classes.summary}>
            <h2>Fresh, great quality products delivered to you!</h2>
            <p>Choose you products from our broad selection.</p>
            <p>All our products are organic and sourced from local markets.</p>
        </section>
    );
}

export default ProductsSummary;