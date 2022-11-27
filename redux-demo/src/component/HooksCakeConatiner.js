import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {buyCake} from '../redux'
function HooksCakeConatiner() {
    const numofCakes = useSelector(state => state.numCakes);
    const dispatch = useDispatch();
    return (
      <div>
         <h2>NUMBER OF  CAKE - {numofCakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>BUY CAKE</button>
      </div>
    )
}

export default HooksCakeConatiner

