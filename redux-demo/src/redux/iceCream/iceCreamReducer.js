import { BUY_iceCream } from "./iceCreamType"

const initialState = {
    numiceCream:20
}

const iceCreamReducer = (state = initialState, action) => {
    switch(action.type){
        case BUY_iceCream: return{
            ...state,
            numiceCream:state.numiceCream-1 
        }

        default: return state
    }
}

export default iceCreamReducer