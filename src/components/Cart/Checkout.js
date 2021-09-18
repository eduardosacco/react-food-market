import React, { useRef, useState } from "react";
import classes from './Checkout.module.css';

function Checkout(props) {
    const [formInputValid, setFormInputValid] = useState({
        name: false,
        address: false,
        zipcode: false,
        city: false,
        country: false,
        touched: false
    });

    const nameInputRef = useRef();
    const addressInputRef = useRef();
    const zipcodeInputRef = useRef();
    const cityInputRef = useRef();
    const countryInputRef = useRef();

    const isEmpty = value => value.trim() === '';

    function confirmHandler(event) {
        event.preventDefault();

        const validEnteredName = !isEmpty(nameInputRef.current.value);
        const validEnteredAddress = !isEmpty(addressInputRef.current.value);
        const validEnteredZipcode = !isEmpty(zipcodeInputRef.current.value);
        const validEnteredCity = !isEmpty(cityInputRef.current.value);
        const validEnteredCountry = !isEmpty(countryInputRef.current.value);

        setFormInputValid({
            name: validEnteredName,
            address: validEnteredAddress,
            zipcode: validEnteredZipcode,
            city: validEnteredCity,
            country: validEnteredCountry,
            touched: true
        });

        const formValid = validEnteredName && validEnteredAddress && validEnteredZipcode
            && validEnteredCity && validEnteredCountry;

        if (!formValid) {
            return;
        }

        // Submit order
        props.onSubmit({
            name: nameInputRef.current.value,
            address: addressInputRef.current.value,
            zipcode: zipcodeInputRef.current.value,
            city: cityInputRef.current.value,
            country: countryInputRef.current.value
        });
    }

    // An input controller can be created to make this simpler
    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={
                `${classes.control} ${formInputValid.touched && !formInputValid.name ? classes.invalid : ''}`
            }>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" ref={nameInputRef} />
                {formInputValid.touched && !formInputValid.name && <p>Please enter a valid name.</p>}
            </div>
            <div className={
                `${classes.control} ${formInputValid.touched && !formInputValid.address ? classes.invalid : ''}`
            }>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" ref={addressInputRef} />
                {formInputValid.touched && !formInputValid.address && <p>Please enter a valid address.</p>}
            </div>
            <div className={
                `${classes.control} ${formInputValid.touched && !formInputValid.zipcode ? classes.invalid : ''}`
            }>
                <label htmlFor="zipcode">Zip Code</label>
                <input type="text" id="zipcode" ref={zipcodeInputRef} />
                {formInputValid.touched && !formInputValid.zipcode && <p>Please enter a valid zipcode.</p>}
            </div>
            <div className={
                `${classes.control} ${formInputValid.touched && !formInputValid.city ? classes.invalid : ''}`
            }>
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityInputRef} />
                {formInputValid.touched && !formInputValid.city && <p>Please enter a valid city.</p>}
            </div>
            <div className={
                `${classes.control} ${formInputValid.touched && !formInputValid.country ? classes.invalid : ''}`
            }>
                <label htmlFor="country">Country</label>
                <input type="text" id="country" ref={countryInputRef} />
                {formInputValid.touched && !formInputValid.country && <p>Please enter a valid country.</p>}
            </div>
            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
}

export default Checkout;