import { GET_PERFUMES, ONE_PERFUME } from './actionType'

const initialState = {
    perfumes: [],
    onePerfume: {}
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
        default:
            return state
    }
}