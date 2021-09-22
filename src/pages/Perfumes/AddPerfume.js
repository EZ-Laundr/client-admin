import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import '../../index.css'
import { addPerfume } from '../../store/perfumes/action'
import ReactLoading from 'react-loading'


export default function AddPerfume({ changeLogin }) {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [loading, setLoading] = useState(false)
    const dispacth = useDispatch()
    const history = useHistory()

    async function add() {
        try {
            const payload = {
                name, price, imageUrl
            }
            setLoading(true)
            const result = await dispacth(addPerfume(payload))
            if (result) {
                setLoading(false)
                history.push('/perfumes')
            }
        } catch (err) {
            console.log(err)
        }

    }

    useEffect(() => {
        if (!localStorage.getItem('access_token')) {
            history.push('/login')
        }
    }, [])

    return (
        <>
            <div className="flex">
                <Sidebar changeLogin={changeLogin} />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className=" flex-grow min-h-16">
                        <div class="text-gray-600 body-font relative">
                            <div class="container px-5 py-20 mx-auto">
                                <div class="flex flex-col text-center w-full">
                                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Add Perfume</h1>
                                </div>
                                <div class="lg:w-1/2 md:w-2/3 w-3/4 border shadow-xl rounded-xl border-indigo-500 p-5 mx-auto">
                                    <div class="flex flex-col flex-wrap ">
                                        <div class="p-2 w-full">
                                            <div class="relative">
                                                <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                                                <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    value={name} onChange={(e) => setName(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div class="p-2 w-full">
                                            <div class="relative">
                                                <label for="price" class="leading-7 text-sm text-gray-600">Price</label>
                                                <input type="number" id="price" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    value={price} onChange={(e) => setPrice(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div class="p-2 w-full">
                                            <div class="relative">
                                                <label for="imageUrl" class="leading-7 text-sm text-gray-600">Image Url</label>
                                                <input type="text" id="imageUrl" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                    value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                                                />
                                            </div>
                                        </div>
                                        <div class="p-2 w-full">
                                            <button class="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={add}>
                                                {
                                                    loading ? (
                                                        <ReactLoading type={'bars'} color={'white'} height={20} width={20} />
                                                    ) : 'Add Perfume'
                                                }
                                            </button>
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