import React from 'react'
import { useSelector } from 'react-redux'

function HooksCakeConatiner() {
    const numofCakes = useSelector(state => state.numCakes)
    return (
      <div>
         <h2>NUMBER OF  CAKE - {numofCakes}</h2>
        <button>BUY CAKE</button>
      </div>
    )
}

export default HooksCakeConatiner

