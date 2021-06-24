import React from 'react'
import {useDispatch, useSelector} from 'react-redux';

function Component_A() {
    const myCounter = useSelector(state => state.counter);
    const dispatch =  useDispatch();

    return (
        <div>
             <h3>Component A</h3>
            <p>Counter: {myCounter}</p>
            <button onClick={()=> dispatch({type:"INCREASE_COUNTER"})}>Increase</button>
            <button onClick={()=> dispatch({type:"DECREASE_COUNTER"})}>Decrease</button>
        </div>
    )
}

export default Component_A
