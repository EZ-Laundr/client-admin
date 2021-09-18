import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import servicesReducer from './services/reducer'
import perfumesReducer from './perfumes/reducer'

const store = createStore(combineReducers({
    services: servicesReducer,
    perfumes: perfumesReducer
}), applyMiddleware(thunk))

export default store