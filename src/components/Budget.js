import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ <input style={{ width: "198px" }} type='number' defaultValue={budget}></input></span>
            
        </div>
    );
};
export default Budget;