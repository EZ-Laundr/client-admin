import { GET_USER } from './actionType'

const initialState = {
    user: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}

