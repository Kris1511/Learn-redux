import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateWallet } from '../Store';

const Payment = () => {

    const data = useSelector(state => state.user);
    console.log(data);
    

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(updateWallet(1000));
    }

  return (
    <div>
        <h1>{data.name} </h1> 
        <h2>{data.age}</h2> 
        <h3> {data.balance}</h3>
        <button onClick={handleClick}>Pay</button>
    </div>
  )
}

export default Payment;