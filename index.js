const redux = require('redux')
const createStore = redux.createStore
// Action
const BUY_CAKE = 'BUY_CAKE';
const BUY_Icecream = 'BUY_Icecream'

function buyCake() {
return {
type:BUY_CAKE
}
}

function buyIcecream() {
    return {
    type:BUY_Icecream
    }
    }

// reducer

const intial = {
    numCake : 10,
    numIcecream:20
}

// copy of state object through ...state

const reducer = (state=intial,action)=> {
switch(action.type){
    case BUY_CAKE: return {
        ...state,
        numCake : state.numCake-1
    }
    case BUY_Icecream: return {
        ...state,
        numIcecream : state.numIcecream-1
    }
    default: return state
}
}


// store
const store  = createStore(reducer);
console.log('intial state',store.getState());
const unSubscribe = store.subscribe(()=>console.log('Updated state',store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIcecream());
store.dispatch(buyIcecream());
unSubscribe();