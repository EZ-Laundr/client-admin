import { GET_SERVICES, ONE_SERVICE } from './actionType'

const initialState = {
    services: [],
    oneService: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_SERVICES:
            return {
                ...state,
                services: action.payload
            }
        case ONE_SERVICE:
            return {
                ...state,
                oneService: action.payload
            }

        default:
            return state
    }
}