const redux = require('redux')
const createStore = redux.createStore

const intialFetch = {
    loading:false,
    user:[],
    error:''
}
const  Fetch_Request =  'Fetch_Request'
const  Fetch_Success =  'Fetch_Request'
const  Fetch_Error =  'Fetch_Error'

const fetchUserRequest = () => {
return {
    type:Fetch_Request
}
}
const fetchUserSuccess = users => {
    return {
        type:Fetch_Success,
        payload:users
    }
}
const fetchUserError = error => {
    return {
        type:Fetch_Error,
        payload:error
    }
}

const reducer = (state=intialFetch,action)=> {
    switch(action.type){
        case fetchUserRequest: return {
            ...state,
            loading:true,
            }
        case fetchUserSuccess :
          return {
            ...state,
            loading:false,
            users:action.payload,
            error: ''
        }
        case fetchUserError: return {
            ...state,
            loading:false,
            users:[],
            error:action.payload
        }
        default: return state
    }
    }



const store  = createStore(reducer);