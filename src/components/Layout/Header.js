import React from 'react';
import classes from './Header.module.css';
import heroImage from '../../assets/fiber.jpg';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
    return(
        <React.Fragment>
            <header className={classes.header}>
            <h1>Food Market</h1>
            <HeaderCartButton onClick={props.onShowCart}>Cart</HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={heroImage}
                    alt='Food Market fiber foods'
                />
            </div>
        </React.Fragment>
    );
}

export default Header;