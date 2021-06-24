import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

function Component_B() {
    const dispatch = useDispatch();
    const myCounnter = useSelector(murat => murat.counter)
    return (
        <div>
            <h3>Component B</h3>
            <p>Counter = {myCounnter}</p>
            <button onClick={()=>dispatch({type:"INCREASE_COUNTER"})}>increase</button>
            <button onClick={()=>dispatch({type:"DECREASE_COUNTER"})}>decrease</button>
        </div>
    )
}

export default Component_B
