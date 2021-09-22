import loginApi from '../../apis/login'
import { GET_USER, LOADING_LOGIN } from './actionType'

function setUser(payload) {
    return {
        type: GET_USER,
        payload
    }
}

function setIsLoadingLogin(payload) {
    return {
        type: LOADING_LOGIN,
        payload
    }
}


export function getUser(payload) {
    return async function (dispacth) {
        const { email, password } = payload
        dispacth(setIsLoadingLogin(true))
        try {
            const { data } = await loginApi({
                method: 'post',
                data: { email, password }
            })
            dispacth(setUser(data))
            return data
        } catch (err) {
            return err
        } finally {
            dispacth(setIsLoadingLogin(false))
        }
    }
}