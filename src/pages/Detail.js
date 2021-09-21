import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory, useParams } from 'react-router'
import orderApi from '../apis/order'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TableTreatmen from '../components/TableTreatmen'
import '../index.css'
import { oneOrder, sendWeight } from '../store/orders/action'
import Map from '../components/Map'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion'
import { formatPrice } from '../helpers/price'

export default function Detail({ changeLogin }) {

    const { id } = useParams()
    const history = useHistory()
    const dispacth = useDispatch()
    const { oneOrder: order } = useSelector(store => {
        return store.orders
    })
    const [email, setEmail] = useState('')
    const [status, setStatus] = useState('')
    const [service, setService] = useState('')
    const [perfume, setPerfume] = useState('')
    const [pickUp, setPickUp] = useState('')
    const [orderSpecials, setOrderSpecials] = useState([])
    const [weight, setWeight] = useState('')
    const [totalPrice, setTotalPrice] = useState('')
    const [priceService, setPriceService] = useState('')
    const [perfumePrice, setPerfumePrice] = useState('')

    async function fetchDetail() {
        try {
            const result = await dispacth(oneOrder(id))
            setEmail(result?.User.email)
            setStatus(result?.status)
            setService(result?.Service.name)
            setPickUp(result?.pickup)
            setOrderSpecials(result?.OrderSpecials)
            setPriceService(result?.Service.price)
            setPerfume(result?.Perfume.name)
            setPerfumePrice(result?.Perfume.price)
            setTotalPrice(result?.totalPrice)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('access_token')) {
            fetchDetail()
        } else {
            history.push('/login')
        }
    }, [])

    useEffect(() => {
        const before = order.totalPrice
        const totalWeight = weight === 0 ? 1 : weight
        setTotalPrice(before + Number(Number(priceService) * Number(totalWeight)))
    }, [weight])

    async function processOrder() {
        try {
            const result = await orderApi({
                method: 'put',
                url: `/${order.id}`,
                data: { weight }
            })
            if (result) {
                fetchDetail()
            }
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <div className="flex">
                <Sidebar changeLogin={changeLogin} />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className=" flex-grow min-h-16">
                        <div className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-10 mx-auto">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900 flex justify-center">Detail Order</h1>
                                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                    <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                        <div className="flex justify-between">
                                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{email}</h1>
                                            <div className="text-gray-900 text-xl title-font font-medium mb-4">
                                                Status : <div class="badge badge-accent p-5">{status}</div>
                                            </div>
                                        </div>
                                        <div className="text-lg title-font  tracking-widest mb-4">Service: {service} <i className="text-green-500 fa-lg far fa-check-circle"></i></div>
                                        <div className="text-lg title-font  tracking-widest mb-4">Perfume: {perfume} | Rp. {perfumePrice} <i className="text-green-500 fa-lg far fa-check-circle"></i></div>
                                        <div className="text-lg title-font  tracking-widest mb-4">
                                            Antar Jemput
                                            {
                                                pickUp ? <i className="text-green-500 fa-lg far fa-check-circle"></i> : <i className="text-red-500 fa-lg fas fa-minus-circle"></i>
                                            }
                                        </div>
                                        {
                                            pickUp && (
                                                <Accordion allowZeroExpanded>
                                                    <AccordionItem>
                                                        <AccordionItemHeading>
                                                            <AccordionItemButton>
                                                                <button className="p-2 bg-indigo-500 shadow-lg text-white text-lg title-font tracking-widest mb-4">
                                                                    Check Map
                                                                </button>
                                                            </AccordionItemButton>
                                                        </AccordionItemHeading>
                                                        <AccordionItemPanel>
                                                            <Map />
                                                        </AccordionItemPanel>
                                                    </AccordionItem>
                                                </Accordion>
                                            )
                                        }
                                        <div className="text-lg title-font  tracking-widest mb-4">
                                            Special Treatments
                                            {orderSpecials?.length === 0 ? (
                                                <i className="text-red-500 fa-lg fas fa-minus-circle"></i>
                                            ) : (
                                                <i className="text-green-500 fa-lg far fa-check-circle"></i>
                                            )}
                                        </div>
                                        {
                                            orderSpecials?.length !== 0 && (
                                                <TableTreatmen data={orderSpecials} />
                                            )
                                        }
                                        <div className="flex border-gray-200 py-2 -mt-4">
                                            {
                                                order.weight === 0 ? (
                                                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} placeholder="input weight" class="input input-bordered w-full" />
                                                ) : (
                                                    <div className="text-lg title-font  tracking-widest mb-4">Weight: {order.weight} Kg</div>
                                                )
                                            }
                                        </div>
                                        <hr />
                                        <div className="flex mt-3 justify-between">
                                            <span className="title-font font-medium text-2xl text-gray-900">{formatPrice(totalPrice)}</span>
                                            <div className="flex space-x-3">
                                                {
                                                    order.weight === 0 && <button onClick={processOrder} className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Process</button>
                                                }
                                                <button onClick={() => history.push('/')} className="flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Back</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div >
            </div >
        </>
    );
}
