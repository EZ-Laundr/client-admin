import orderApi from '../../apis/order'
import { GET_ORDERS, ONE_ORDER } from './actionType'

function setOrders(payload) {
    return {
        type: GET_ORDERS,
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
        try {
            const { data } = await orderApi({
                method: 'get'
            })
            dispacth(setOrders(data))
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