import orderApi from '../../apis/order'
import { GET_ORDERS, ONE_ORDER, LOADING_ORDER } from './actionType'

function setOrders(payload) {
    return {
        type: GET_ORDERS,
        payload
    }
}

function setLoadingOrder(payload) {
    return {
        type: LOADING_ORDER,
        payload
    }
}

function setOneOrder(payload) {
    return {
        type: ONE_ORDER,
        payload
    }
}

export function getOrders() {
    return async function (dispacth) {
        dispacth(setLoadingOrder(true))
        try {
            const { data } = await orderApi({
                method: 'get'
            })
            console.log(data)
            dispacth(setOrders(data))
            dispacth(setLoadingOrder(false))
            return data
        } catch (err) {
            console.log(err)
        }
    }
}

export function oneOrder(id) {
    return async function (dispacth) {
        try {
            const { data } = await orderApi({
                method: 'get',
                url: `/${id}`
            })
            dispacth(setOneOrder(data))
            return data
        } catch (err) {
            console.log(err)
        }
    }
}

export function sendWeight(weight) {
    return async function () {
        try {
            const result = await orderApi({
                method: 'put',
                data: {
                    weight
                }
            })
            console.log(result)
        } catch (err) {
            console.log(err)
        }
    }
}