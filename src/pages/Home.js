import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TableOrder from '../components/TableOrder'
import '../index.css'
import { getOrders } from '../store/orders/action'


export default function Home() {
    const { orders } = useSelector(store => {
        return store.orders
    })
    const dispacth = useDispatch()
    useEffect(() => {
        dispacth(getOrders())
    }, [])
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className=" flex-grow min-h-16">
                        <div className="container px-5 py-10 mx-auto">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900 flex justify-center">Customers</h1>
                            <TableOrder data={orders} />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}