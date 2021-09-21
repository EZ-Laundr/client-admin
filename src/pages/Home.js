import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TableOrder from '../components/TableOrder'
import '../index.css'
import { getOrders } from '../store/orders/action'
import { Redirect } from 'react-router-dom'
import 'animate.css'


export default function Home({ isLogin, changeLogin }) {
    const { orders, isLoadingOrder } = useSelector(store => {
        return store.orders
    })
    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(getOrders())
    }, [])
    if (!isLogin) {
        return <Redirect to="/login" />
    }
    return (
        <>
            <div className="flex">
                <Sidebar changeLogin={changeLogin} />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className="flex-grow min-h-16">
                        <div className="container px-5 py-10 mx-auto">
                            {
                                isLoadingOrder && (
                                    <div className="flex justify-center items-center h-96">
                                        <img src="https://i.ibb.co/mGH9RHc/logo-dashboard-removebg-preview.png" className="animate-bounce w-40" alt="logo-dashboard" border="0" />
                                    </div>
                                )
                            }
                            <h1 class="animate__animated animate__fadeInUp sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900 flex justify-center">Customers</h1>
                            <div className="animate__animated animate__slideInUp">
                                <TableOrder data={orders} />
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}

