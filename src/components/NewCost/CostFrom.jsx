import React, { useState } from 'react';
import './CostFrom.css';
const CostFrom = (props) => {


    const [inputName, setInputName] = useState('');
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');


    const nameChangeHandler = (event) => {
        setInputName(event.target.value);

    };

    const amountChangeHandler = (event) => {
        setInputAmount(event.target.value);


    };

    const dateChangeHandler = (event) => {

        setInputDate(event.target.value)
    };
   
    const submitHandler = (event) => {
        event.preventDefault();
        
        const costData = {
            description: inputName,
            amount: inputAmount,
            date: new Date(inputDate),
        }
    
       props.onSaveCostData(costData);
       setInputName('');
       setInputAmount('');
       setInputDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-cost__controls">
                <div className="new-cost__control">
                    <label>Name</label>
                    <input type="text" value={inputName} onChange={nameChangeHandler} />
                </div>
                <div className="new-cost__control">
                    <label>Price</label>
                    <input 
                    value={inputAmount}
                    onChange={amountChangeHandler} 
                    type="number" min='0.01'
                    step='0.01' />
                </div>
                <div className="new-cost__control">
                    <label>Data</label>
                    <input 
                    value={inputDate}
                    onChange={dateChangeHandler} 
                    type="date" min='2019-01'
                        step='2022-12-31' />
                </div>
                <div className="new-cost__actions">
                    <button type="submit"> Add waste</button>
                </div>

            </div>
        </form>
    )
}

export default CostFrom;
