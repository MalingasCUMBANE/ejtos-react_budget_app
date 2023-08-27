import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

function Currency() {
    const { setCurrency } = useContext(AppContext);

    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    };

    return (
        <div className='alert alert-secondary'>
           Currency:
            <select style={{width: "198px"}} id="currency" onChange={handleCurrencyChange}>
                <option value="USD">$ Dollar</option>
                <option value="GBP">£ Pound</option>
                <option value="EUR">€ Euro</option>
                <option value="INR">₹ Rupee</option>
            </select>
        </div>
    );
}

export default Currency;
