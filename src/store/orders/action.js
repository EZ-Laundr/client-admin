import orderApi from "../../apis/order";
import userApi from "../../apis/user";
import { GET_ORDERS, ONE_ORDER, LOADING_ORDER, GET_USERS } from "./actionType";

function setOrders(payload) {
    return {
        type: GET_ORDERS,
        payload,
    };
}

function setUsers(payload) {
    return {
        type: GET_USERS,
        payload,
    };
}

function setLoadingOrder(payload) {
    return {
        type: LOADING_ORDER,
        payload,
    };
}

function setOneOrder(payload) {
    return {
        type: ONE_ORDER,
        payload,
    };
}

export function getOrders() {
    return async function (dispacth) {
        dispacth(setLoadingOrder(true));
        try {
            const { data } = await orderApi({
                method: "get",
            });
            dispacth(setOrders(data));
            dispacth(setLoadingOrder(false));
            return data;
        } catch (err) {
            console.log(err);
        }
    };
}

export function getUsers() {
    return async function (dispacth) {
        dispacth(setLoadingOrder(true))
        try {
            const { data } = await userApi({
                method: "get",
            });
            dispacth(setUsers(data));
            dispacth(setLoadingOrder(false))
            return data;
        } catch (err) {
            console.log(err);
        }
    };
}

export function oneOrder(id) {
    return async function (dispacth) {
        dispacth(setLoadingOrder(true))
        try {
            const { data } = await orderApi({
                method: "get",
                url: `/${id}`,
            });
            dispacth(setOneOrder(data));
            dispacth(setLoadingOrder(false))
            return data;
        } catch (err) {
            console.log(err);
        }
    };
}

export function sendWeight(weight) {
    return async function () {
        try {
            const result = await orderApi({
                method: "put",
                data: {
                    weight,
                },
            });
            console.log(result);
        } catch (err) {
            console.log(err);
        }
    };
}
