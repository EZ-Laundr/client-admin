import { GET_PERFUMES, LOADING_PERFUME, ONE_PERFUME } from './actionType'

const initialState = {
    perfumes: [],
    onePerfume: {},
    isLoadingPerfume: false
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_PERFUMES:
            return {
                ...state,
                perfumes: action.payload
            }
        case ONE_PERFUME:
            return {
                ...state,
                onePerfume: action.payload
            }
        case LOADING_PERFUME:
            return {
                ...state,
                isLoadingPerfume: action.payload
            }
        default:
            return state
    }
}