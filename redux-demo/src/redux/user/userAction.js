import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './userType'

export const fetchUsersRequest = () => {
    return {
    type: FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = user => {
    return {
    type: FETCH_USERS_SUCCESS,
    payload : user
    }
}

export const fetchUsersFailure = error => {
    return {
    type: FETCH_USERS_FAILURE,
    payload: error
    }
}