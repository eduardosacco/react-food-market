import React from 'react';
import classes from './Header.module.css';
import heroImage from '../../assets/fiber.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    return(
        <React.Fragment>
            <header className={classes.header}>
            <h1>Food Market</h1>
            <HeaderCartButton>Cart</HeaderCartButton>
            </header>
            <div>
                <img className={classes.mainImage}
                    src={heroImage}
                    alt='Food Market fiber foods'/>
            </div>
        </React.Fragment>
    );
}

export default Header;