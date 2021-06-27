import { useRef, useState } from 'react'; 
import classes from './ProductItemForm.module.css';
import Input from '../../UI/Input';

function ProductItemForm(props) {
    const amountInputRef = useRef();
    const [formIsValid, setFormIsValid] =  useState(true);

    function submitHandler(event) {
        event.preventDefault();
        const stringAmount = amountInputRef.current.value;
        const numberAmount = +stringAmount;

        if (stringAmount.trim().length === 0
            || stringAmount < 1 || numberAmount >= 99)
        {
            setFormIsValid(false);
            return;
        }
        props.onAddToCart(numberAmount);
    }
    
    return(
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef}
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '99',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Add</button>
            {!formIsValid && <p>Please enter a valid amount (1-99).</p>}
        </form>
    );
}

export default ProductItemForm;