import loginApi from '../../apis/login'
import { GET_USER } from './actionType'

function setUser(payload) {
    return {
        type: GET_USER,
        payload
    }
}


export function getUser(payload) {
    return async function (dispacth) {
        const { email, password } = payload
        console.log(email, password)
        try {
            const { data } = await loginApi({
                method: 'post',
                data: { email, password }
            })
            dispacth(setUser(data))
            return data
        } catch (err) {
            console.log(err)
        }
    }
}