import { GET_SPECIALS, ONE_SPECIAL, LOADING_SPECIAL } from './actionType'

const initialState = {
    specials: [],
    oneSpecial: {},
    isLoadingSpecial: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_SPECIALS:
            return {
                ...state,
                specials: action.payload
            }
        case ONE_SPECIAL:
            return {
                ...state,
                oneSpecial: action.payload
            }
        case LOADING_SPECIAL:
            return {
                ...state,
                isLoadingSpecial: action.payload
            }
        default:
            return state
    }
}