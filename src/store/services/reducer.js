import { GET_SERVICES, ONE_SERVICE, LOADING_SERVICE } from './actionType'

const initialState = {
    services: [],
    oneService: {},
    isLoadingService: false
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
        case LOADING_SERVICE:
            return {
                ...state,
                isLoadingService: action.payload
            }
        default:
            return state
    }
}