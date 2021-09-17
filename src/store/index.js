import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import servicesReducer from './services/reducer'

const store = createStore(combineReducers({
    services: servicesReducer
}), applyMiddleware(thunk))

export default store