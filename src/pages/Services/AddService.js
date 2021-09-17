import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import '../../index.css'
import { addServices } from '../../store/services/action'


export default function AddService() {
    const dispacth = useDispatch()
    const history = useHistory()
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    async function add() {
        const payload = {
            name, price, imageUrl
        }
        try {
            const result = await dispacth(addServices(payload))
            if (result) {
                console.log(result)
                history.push('/services')
            }
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className=" flex-grow min-h-16">
                        <div className="text-gray-600 body-font relative">
                            <div className="container px-5 py-20 mx-auto">
                                <div className="flex flex-col text-center w-full">
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Service</h1>
                                </div>
                                <div className="lg:w-1/2 md:w-2/3 w-3/4 border shadow-xl rounded-xl border-indigo-500 p-5 mx-auto">
                                    <div className="flex flex-col flex-wrap ">
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                                <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <label for="price" className="leading-7 text-sm text-gray-600">Price</label>
                                                <input type="number" id="price" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    value={price}
                                                    onChange={(e) => setPrice(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            <div className="relative">
                                                <label for="imageUrl" className="leading-7 text-sm text-gray-600">Image Url</label>
                                                <input type="text" id="imageUrl" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    value={imageUrl}
                                                    onChange={(e) => setImageUrl(e.target.value)} />
                                            </div>
                                        </div>
                                        <div className="p-2 w-full">
                                            <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                                                onClick={add}>Add Service</button>
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