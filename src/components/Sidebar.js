import '../index.css'
import { Link } from 'react-router-dom'
export default function Sidebar() {
    return (
        <>
            <div className="flex-none flex-col md:flex md:flex-row md:min-h-screen bg-blueGray-50">
                <div className="flex flex-col flex-shrink-0 w-full text-blueGray-700 bg-white shadow-xl md:w-64">
                    <div className="flex flex-col items-center flex-shrink-0 py-4">
                        <Link to="/" className="w-full px-8 focus:outline-none">
                            <div className="inline-flex items-center">
                                <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
                                </div>
                                <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> EZ Laundr </h2>
                            </div>
                        </Link>
                    </div>
                    <nav className="flex-grow pb-4 pr-4 md:block md:pb-0 md:overflow-y-auto">
                        <ul>
                            <li>
                                <Link to="/" className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">
                                    <i class="fa-lg fas fa-users"></i>
                                    <span className="ml-4">Customer</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/services" className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">
                                    <i class="fa-lg fas fa-hand-sparkles"></i>
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
                                <Link className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600">
                                    <i class="far fa-gem fa-lg"></i>
                                    <span className="ml-4">Special Treatments</span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}