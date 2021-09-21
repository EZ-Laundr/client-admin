import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import servicesReducer from "./services/reducer";
import perfumesReducer from "./perfumes/reducer";
import specialsReducer from "./specials/reducer";
import ordersReducer from "./orders/reducer";
import loginReducer from "./login/reducer";

const store = createStore(
    combineReducers({
        services: servicesReducer,
        perfumes: perfumesReducer,
        specials: specialsReducer,
        orders: ordersReducer,
        login: loginReducer,
    }),
    applyMiddleware(thunk)
);

export default store;
