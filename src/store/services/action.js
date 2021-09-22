import servicesApi from '../../apis/services'
import { GET_SERVICES, ONE_SERVICE, LOADING_SERVICE } from './actionType'

function setServices(payload) {
    return {
        type: GET_SERVICES,
        payload
    }
}

function setOneService(payload) {
    return {
        type: ONE_SERVICE,
        payload
    }
}

function setLoadingService(payload) {
    return {
        type: LOADING_SERVICE,
        payload
    }
}

export function getServices() {
    return async function (dispacth) {
        dispacth(setLoadingService(true))
        try {
            const { data } = await servicesApi({
                method: 'get'
            })
            dispacth(setServices(data))
        } catch (err) {
            console.log(err)
        } finally {
            dispacth(setLoadingService(false))
        }
    }
}

export function addServices(payload) {
    return async function (dispacth) {
        try {
            dispacth(setLoadingService(true))
            const { name, price, imageUrl } = payload
            return await servicesApi({
                method: 'post',
                data: {
                    name, price, imageUrl
                }
            })
        } catch (err) {
            console.log(err)
        } finally {
            dispacth(setLoadingService(false))
        }
    }
}

export function oneService(id) {
    return async function (dispacth) {
        try {
            const { data } = await servicesApi({
                method: 'get',
                url: `/${id}`
            })
            dispacth(setOneService(data))
            return data
        } catch (err) {
            console.log(err)
        }
    }
}

export function updateService(payload) {
    return async function () {
        const { id, name, price, imageUrl } = payload
        try {
            return await servicesApi({
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

export function deleteService(id) {
    return async function () {
        try {
            return await servicesApi({
                method: 'delete',
                url: `/${id}`
            })
        } catch (err) {
            console.log(err)
        }
    }
}