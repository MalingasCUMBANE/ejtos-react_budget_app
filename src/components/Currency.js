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
            <select  id="currency" style={selectStyles} onChange={handleCurrencyChange}>
                <option value="USD">$ Dollar</option>
                <option value="GBP">£ Pound</option>
                <option value="EUR">€ Euro</option>
                <option value="INR">₹ Rupee</option>
            </select>
        </div>
    );
}

const selectStyles = {
    backgroundColor: 'lightgreen',
    fontSize: '16px',
   width: "198px",

};


export default Currency;
