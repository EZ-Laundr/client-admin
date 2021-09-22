import perfumeApi from '../../apis/perfume'
import { GET_PERFUMES, ONE_PERFUME, LOADING_PERFUME } from './actionType'


function setPerfumes(payload) {
    return {
        type: GET_PERFUMES,
        payload
    }
}

function setOnePerfume(payload) {
    return {
        type: ONE_PERFUME,
        payload
    }
}

function setLoadingPerfume(payload) {
    return {
        type: LOADING_PERFUME,
        payload
    }
}

export function getPerfumes() {
    return async function (dispacth) {
        dispacth(setLoadingPerfume(true))
        try {
            const { data } = await perfumeApi({
                method: 'get'
            })
            dispacth(setPerfumes(data))
        } catch (err) {
            console.log(err)
        } finally {
            dispacth(setLoadingPerfume(false))
        }
    }
}

export function addPerfume(payload) {
    return async function () {
        const { name, price, imageUrl } = payload
        try {
            return await perfumeApi({
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

export function onePerfume(id) {
    return async function (dispacth) {
        try {
            const { data } = await perfumeApi({
                method: 'get',
                url: `/${id}`
            })
            dispacth(setOnePerfume(data))
            return data
        } catch (err) {
            console.log(err)
        }
    }
}

export function updatePerfume(payload) {
    return async function () {
        const { id, name, price, imageUrl } = payload
        try {
            return await perfumeApi({
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

export function deletePerfume(id) {
    return async function () {
        try {
            return await perfumeApi({
                method: 'delete',
                url: `/${id}`
            })
        } catch (err) {
            console.log(err)
        }
    }
}