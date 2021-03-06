import { GET_ORDERS, ONE_ORDER, LOADING_ORDER, GET_USERS } from './actionType'

const initialState = {
    orders: [],
    oneOrder: {},
    isLoadingOrder: false,
    users: []
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ORDERS:
            return {
                ...state,
                orders: action.payload
            }
        case ONE_ORDER:
            return {
                ...state,
                oneOrder: action.payload
            }
        case GET_USERS: {
            return {
                ...state,
                users: action.payload
            }
        }
        case LOADING_ORDER: {
            return {
                ...state,
                isLoadingOrder: action.payload
            }
        }
        default:
            return state
    }
}