import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';

function Component_A() {
    const myCounter = useSelector(state => state.counter);
    const name = useSelector(name => name.name)
    const dispatch = useDispatch();
    const [user, setUser] = useState('murat')

    console.log('userName',user)

    return (
        <div>
            <h3>Component A</h3>
            <p>Counter: {myCounter}</p>
            <p>Name : {name}</p>
            <input type="text" name="userName" id="userName" onChange={e =>setUser(e.target.value) }/>
            <p>{user}</p>
            <button onClick={() => dispatch({ type: "INCREASE_COUNTER" })}>Increase</button>
            <button onClick={() => dispatch({ type: "DECREASE_COUNTER" })}>Decrease</button>
            <button onClick={() => dispatch({ type: "CHANGE_NAME" , payload :{ userName : user}})}>Change Name</button>
        </div>
    )
}

export default Component_A
