import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import '../index.css'
import { getUser } from '../store/login/action'

export default function Login({ changeLogin, isLogin }) {
    const dispacth = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function login() {
        const payload = {
            email, password
        }
        const result = await dispacth(getUser(payload))
        if (result) {
            if (result.role === 'admin') {
                localStorage.setItem('access_token', result.access_token)
                localStorage.setItem('email', result.email)
                localStorage.setItem('role', result.role)
                changeLogin(true)
                history.push('/')
            }
        }
    }

    if (isLogin) {
        return <Redirect to="/" />
    }

    return (
        <>
            <div class="min-h-screen bg-indigo-500 flex items-center justify-center sm:py-12">
                <div class="bg-white p-16 rounded shadow-2xl w-1/2">
                    <h2 class="text-3xl font-bold mb-10 text-center">Login</h2>
                    <div class="space-y-8">
                        <div>
                            <label class="block mb-2" for="email">Email</label>
                            <input class="border-2 border-gray-200 p-3 w-full rounded outline-none focus:border-blue-500"
                                type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label class="block mb-2" for="password">Password</label>
                            <input class="border-2 border-gray-200 p-3 w-full rounded outline-none focus:border-blue-500"
                                type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button class="block w-full bg-indigo-500 p-4 rounded text-white font-bold"
                            onClick={login} >Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}