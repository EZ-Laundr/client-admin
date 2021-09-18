import { GET_ORDERS, ONE_ORDER } from './actionType'

const initialState = {
    orders: [],
    oneOrder: {}
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
        default:
            return state
    }
}