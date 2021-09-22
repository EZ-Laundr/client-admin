import '../index.css'
import { Link, useHistory } from 'react-router-dom'
import logo from '../images/logo4.png'

export default function Sidebar({ changeLogin }) {
    const history = useHistory()

    function logout() {
        localStorage.clear()
        changeLogin(false)
        history.push({ pathname: '/login' })
    }
    return (
        <>
            <div className="flex-none flex-col md:flex md:flex-row md:min-h-screen bg-blueGray-50">
                <div className="flex flex-col flex-shrink-0 w-full text-blueGray-700 bg-white shadow-xl md:w-64">
                    <div className="flex flex-col items-center flex-shrink-0 mt-1">
                        <Link to="/" className="w-full px-5 py-2 focus:outline-none">
                            <div className="flex items-center">
                                <img src={logo} className=" h-11" alt="logo-dashboard" border="0" />
                                <div className="ml-2 text-xl font-bold tracking-widest">EZ Laundr</div>
                            </div>
                        </Link>
                    </div>
                    <hr className="" />
                    <nav className="flex-grow pb-4 pr-4 md:block md:pb-0 md:overflow-y-auto">
                        <ul>
                            <li>
                                <Link to="/" className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">
                                    <i class="fa-lg fas fa-users"></i>
                                    <span className="ml-4">Customer</span>
                                </Link>
                            </li>
                            <li>
                                <Link to={{ pathname: '/services' }} className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">
                                    <i class="fas fa-hand-sparkles fa-lg"></i>
                                    <span className="ml-4">Services</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/perfumes" className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">
                                    <i class="fas fa-magic fa-lg"></i>
                                    <span className="ml-4">Perfume</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/specials" className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">
                                    <i class="far fa-gem fa-lg"></i>
                                    <span className="ml-4">Special Treatments</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/qr" className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">
                                    <i class="fas fa-qrcode fa-lg"></i>
                                    <span className="ml-4">Scan QR Code</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/chat" className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">
                                    <i class="far fa-comments fa-lg"></i>
                                    <span className="ml-4">Customer Chatting</span>
                                </Link>
                            </li>
                            <li>
                                <button onClick={logout} className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">
                                    <i class="fas fa-sign-out-alt fa-lg"></i>
                                    <span className="ml-4">Logout</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}