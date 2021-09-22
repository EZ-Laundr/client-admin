import { GET_USER, LOADING_LOGIN } from './actionType'

const initialState = {
    user: {},
    isLoadingLogin: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case LOADING_LOGIN:
            return {
                ...state,
                isLoadingLogin: action.payload
            }
        default:
            return state
    }
}

