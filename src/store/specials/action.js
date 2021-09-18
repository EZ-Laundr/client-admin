import specialApi from '../../apis/special'
import { GET_SPECIALS, ONE_SPECIAL } from './actionType'

function setSpecials(payload) {
    return {
        type: GET_SPECIALS,
        payload
    }
}

function setOneSpecial(payload) {
    return {
        type: ONE_SPECIAL,
        payload
    }
}

export function getSpecials() {
    return async function (dispacth) {
        try {
            const { data } = await specialApi({
                method: 'get'
            })
            dispacth(setSpecials(data))
            return data
        } catch (err) {
            console.log(err)
        }
    }
}

export function addSpecial(payload) {
    return async function () {
        const { name, price, imageUrl } = payload
        try {
            return await specialApi({
                method: 'post',
                data: {
                    name, price, imageUrl
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function oneSpecial(id) {
    return async function (dispacth) {
        try {
            const { data } = await specialApi({
                method: 'get',
                url: `/${id}`
            })
            dispacth(setOneSpecial(data))
            return data
        } catch (err) {
            console.log(err)
        }
    }
}

export function updateSpecial(payload) {
    return async function () {
        const { id, name, price, imageUrl } = payload
        try {
            return await specialApi({
                method: 'put',
                url: `/${id}`,
                data: {
                    name, price, imageUrl
                }
            })
        } catch (err) {
            console.log(err)
        }
    }
}

export function deleteSpecial(id) {
    return async function () {
        try {
            return await specialApi({
                method: 'delete',
                url: `/${id}`
            })
        } catch (err) {
            console.log(err)
        }
    }
}