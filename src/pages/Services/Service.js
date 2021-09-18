import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import TableMaster from '../../components/TableMaster'
import '../../index.css'
import { getServices } from '../../store/services/action'


export default function Service() {
    const dispacth = useDispatch()
    const { services } = useSelector(store => {
        return store.services
    })
    useEffect(() => {
        dispacth(getServices())
    }, [])

    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className=" flex-grow min-h-16">
                        <div className="container px-5 py-10 mx-auto">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900 flex justify-center">Services</h1>
                            <TableMaster data={services} type="services" />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}