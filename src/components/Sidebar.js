import '../index.css'

export default function Sidebar() {
    return (
        <>
            <div className="flex-none flex-col md:flex md:flex-row md:min-h-screen bg-blueGray-50">
                <div className="flex flex-col flex-shrink-0 w-full text-blueGray-700 bg-white shadow-xl md:w-64">
                    <div className="flex flex-col items-center flex-shrink-0 py-4">
                        <a href="/" className="w-full px-8 focus:outline-none">
                            <div className="inline-flex items-center">
                                <div className="w-2 h-2 p-2 mr-2 rounded-full bg-gradient-to-tr from-blue-500 to-blue-600">
                                </div>
                                <h2 className="block p-2 text-xl font-medium tracking-tighter text-black transition duration-500 ease-in-out transform cursor-pointer hover:text-blueGray-500 lg:text-x lg:mr-8"> EZ Laundr </h2>
                            </div>
                        </a>
                    </div>
                    <nav className="flex-grow pb-4 pr-4 md:block md:pb-0 md:overflow-y-auto">
                        <ul>
                            <li>
                                <a className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" className=" icon icon-tabler icon-tabler-credit-card" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="3" y="5" width="18" height="14" rx="3"></rect>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                        <line x1="7" y1="15" x2="7.01" y2="15"></line>
                                        <line x1="11" y1="15" x2="13" y2="15"></line>
                                    </svg>
                                    <span className="ml-4">Customer</span>
                                </a>
                            </li>
                            <li>
                                <a className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-inbox" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                                        <path d="M4 13h3l3 3h4l3 -3h3"></path>
                                    </svg>
                                    <span className="ml-4">Services</span>
                                </a>
                            </li>
                            <li>
                                <a className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-artboard" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <rect x="8" y="8" width="8" height="8" rx="1"></rect>
                                        <line x1="3" y1="8" x2="4" y2="8"></line>
                                        <line x1="3" y1="16" x2="4" y2="16"></line>
                                        <line x1="8" y1="3" x2="8" y2="4"></line>
                                        <line x1="16" y1="3" x2="16" y2="4"></line>
                                        <line x1="20" y1="8" x2="21" y2="8"></line>
                                        <line x1="20" y1="16" x2="21" y2="16"></line>
                                        <line x1="8" y1="20" x2="8" y2="21"></line>
                                        <line x1="16" y1="20" x2="16" y2="21"></line>
                                    </svg>
                                    <span className="ml-4">Perfume</span>
                                </a>
                            </li>
                            <li>
                                <a className="w-full inline-flex items-center px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform border-l-4 border-white hover:border-blue-600 focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:text-blue-600" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-users" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"></path>
                                    </svg>
                                    <span className="ml-4">Special Treatments</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}