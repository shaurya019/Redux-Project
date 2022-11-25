const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const intialFetch = {
    loading:false,
    user:[],
    error:''
}
const  Fetch_Request =  'Fetch_Request'
const  Fetch_Success =  'Fetch_Request'
const  Fetch_Error =  'Fetch_Error'

const fetchUsersRequest = () => {
return {
    type:Fetch_Request
}
}
const fetchUsersSuccess = users => {
    return {
        type:Fetch_Success,
        payload:users
    }
}
const fetchUsersError = error => {
    return {
        type:Fetch_Error,
        payload:error
    }
}

const reducer = (state=intialFetch,action)=> {
    switch(action.type){
        case Fetch_Request: return {
            ...state,
            loading:true,
            }
        case Fetch_Success :
          return {
            loading:false,
            users:action.payload,
            error: ''
        }
        case Fetch_Error: return {
            loading:false,
            users:[],
            error:action.payload
        }
        default: return state
    }
    }


const fetchUser = () => {
    return function(dispatch) {
        dispatch(fetchUsersRequest())
axios.get('https://jsonplaceholder.typicode.com/users')
.then(response => {
    const users = response.data.map(user=>user.id)
    dispatch(fetchUsersSuccess(users))
})
.catch(error => {
    dispatch(fetchUsersError(error.message))
})
    }
}
const store  = createStore(reducer,applyMiddleware(thunkMiddleware));
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(fetchUser())