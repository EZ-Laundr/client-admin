import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import '../index.css'
import { getUser } from '../store/login/action'
import Swal from 'sweetalert2'
import logo from '../images/logo.png'
import 'animate.css'

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
            if (err) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Email or Password is Wrong!',
                })
            }
        }
    }

    if (isLogin) {
        return <Redirect to="/" />
    }

    return (
        <>
            <div className="min-h-screen bg-gray-100 flex items-center justify-center sm:py-12">
                <div className="bg-white p-16 rounded shadow-2xl w-1/2">
                    <div className="text-3xl font-bold items-center flex flex-col">
                        <img className="animate__animated animate__tada" src={logo} alt="EZ Laundr" width="200" height="200" />
                        <h1 className="text-3xl font-bold mx-auto mb-10 flex justfy-center mt-4">Admin Login</h1>
                    </div>

                    <div className="space-y-8">
                        <div className="border-b-2 flex items-center">
                            <i class="far fa-envelope fa-lg"></i>
                            <input className="p-3 w-full focus:outline-none"
                                type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                        </div>
                        <div className="border-b-2 flex items-center">
                            <i class="fas fa-lock"></i>
                            <input className=" p-3 w-full focus:outline-none"
                                type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </div>
                        <button
                            style={{ backgroundColor: '#107CF1' }}
                            className={isLoadingLogin ? 'btn  loading w-full' : 'block w-full btn '}
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