import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TableTreatmen from '../components/TableTreatmen'
import '../index.css'


export default function Detail() {
    const { id } = useParams()
    const history = useHistory()
    const dispacth = useDispatch()
    const { oneOrder: order } = useSelector(store => {
        return store.orders
    })

    const [customerName, setCustomerName] = useState(order.Users.name)
    const [status, setStatus] = useState(order.status)
    const [service, setService] = useState(order.Services.name)
    const [pickUp, setPickUp] = useState(order.pickUp)
    const [treatmens, setTreatments] = useState(order.SpecialTreatments)
    const [priceService, setPriceService] = useState(order.Services.price)
    const [pricePerfume, setPricePerfume] = useState(order.Perfumes.price)
    const [priceTreatments, setPriceTreatments] = useState(0)
    const [pricePickUp, setPricePickUp] = useState(
        pickUp ? Number(order.rangeAddress) * 2000 : 0
    )
    const [weight, setWeight] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)



    useEffect(() => {
        let totalPriceTreatments = 0
        treatmens?.forEach(el => {
            totalPriceTreatments += Number(el.price) * Number(el.qty)
        })
        setPriceTreatments(totalPriceTreatments)
    }, [])

    useEffect(() => {
        let allPrice = 0
        let totalWeight = weight === '' ? 1 : weight
        allPrice += (Number(priceService) * Number(totalWeight)) + Number(pricePerfume) + Number(priceTreatments) + Number(pricePickUp)
        setTotalPrice(allPrice)
    }, [priceService, pricePerfume, priceTreatments, pricePickUp, weight])
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className=" flex-grow min-h-16">
                        <div className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-10 mx-auto">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900 flex justify-center">Detail Order</h1>
                                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                    <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                        <div className="flex justify-between">
                                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{customerName}</h1>
                                            <div className="text-gray-900 text-xl title-font font-medium mb-4">
                                                Status : <div class="badge badge-accent p-5">{status}</div>
                                            </div>
                                        </div>
                                        <div className="text-lg title-font  tracking-widest mb-4">Service: {service} <i className="text-green-500 fa-lg far fa-check-circle"></i></div>
                                        <div className="text-lg title-font  tracking-widest mb-4">Perfume: Akasa <i className="text-green-500 fa-lg far fa-check-circle"></i></div>
                                        <div className="text-lg title-font  tracking-widest mb-4">
                                            Antar Jemput
                                            {
                                                pickUp ? <i className="text-green-500 fa-lg far fa-check-circle"></i> : <i className="text-red-500 fa-lg fas fa-minus-circle"></i>
                                            }
                                        </div>
                                        {
                                            pickUp && (
                                                <div className="flex items-center justify-between border-t border-b border-gray-200 py-2 mb-2">
                                                    <div className="text-gray-500 w-1/2">
                                                        Your alamat
                                                    </div>
                                                    <span className="text-gray-900">10 Km</span>
                                                    <span className="text-gray-900">2000/km</span>
                                                </div>
                                            )
                                        }

                                        <div className="text-lg title-font  tracking-widest mb-4">
                                            Special Treatments
                                            {
                                                treatmens?.length === 0 ? <i className="text-red-500 fa-lg fas fa-minus-circle"></i> : <i className="text-green-500 fa-lg far fa-check-circle"></i>
                                            }
                                        </div>
                                        {
                                            treatmens?.length !== 0 && (<TableTreatmen data={treatmens} />)
                                        }

                                        <div className="flex border-gray-200 py-2 -mt-4">
                                            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="input weight" class="input input-bordered w-full" />
                                        </div>
                                        <hr />
                                        <div className="flex mt-3">
                                            <span className="title-font font-medium text-2xl text-gray-900">RP {totalPrice}</span>
                                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Process</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}