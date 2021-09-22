import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import '../index.css'
import { getUser } from '../store/login/action'
import Swal from 'sweetalert2'

export default function Login({ changeLogin, isLogin }) {
    const { isLoadingLogin } = useSelector(store => {
        return store.login
    })

    const dispacth = useDispatch()
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    async function login() {
        try {
            if (email === '' || password === '') {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email or Password is Wrong!',
                })
            } else {
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
        } catch (err) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email or Password is Wrong!',
            })
        }
    }

    if (isLogin) {
        return <Redirect to="/" />
    }

    return (
        <>
            <div className="min-h-screen bg-indigo-700 flex items-center justify-center sm:py-12">
                <div className="bg-white p-16 rounded shadow-2xl w-1/2">
                    <h2 className="text-3xl font-bold mb-10 text-center">Login</h2>
                    <div className="space-y-8">
                        <div>
                            <label className="block mb-2" for="email">Email</label>
                            <input className="border-2 border-gray-200 p-3 w-full rounded outline-none focus:border-blue-500"
                                type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label className="block mb-2" for="password">Password</label>
                            <input className="border-2 border-gray-200 p-3 w-full rounded outline-none focus:border-blue-500"
                                type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button
                            className={isLoadingLogin ? 'btn btn-primary loading w-full' : 'block w-full btn btn-primary'}
                            onClick={login} >
                            {
                                !isLoadingLogin && 'Login'
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}