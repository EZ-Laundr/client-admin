import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import servicesReducer from './services/reducer'
import perfumesReducer from './perfumes/reducer'
import specialsReducer from './specials/reducer'

const store = createStore(combineReducers({
    services: servicesReducer,
    perfumes: perfumesReducer,
    specials: specialsReducer
}), applyMiddleware(thunk))

export default store