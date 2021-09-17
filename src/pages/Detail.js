import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../index.css'


export default function Detail() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className=" flex-grow min-h-16">
                        <section className="text-gray-600 body-font overflow-hidden">
                            <div className="container px-5 py-10 mx-auto">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900 flex justify-center">Detail Order</h1>
                                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                                    <div className=" w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                        <div className="flex justify-between">
                                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Customer Name Satu</h1>
                                            <div className="text-gray-900 text-xl title-font font-medium mb-4">
                                                Status : <div class="badge badge-accent p-5">On Going</div>
                                            </div>
                                        </div>
                                        <h2 className="text-lg title-font  tracking-widest mb-4">Cuci Strika <i className="text-green-500 fa-lg far fa-check-circle"></i></h2>
                                        <h2 className="text-lg title-font  tracking-widest mb-4">Parfum Pewangi Pakaian <i className="text-green-500 fa-lg far fa-check-circle"></i></h2>
                                        <h2 className="text-lg title-font  tracking-widest mb-4">Antar Jemput <i className="text-red-500 fa-lg fas fa-minus-circle"></i></h2>
                                        <h2 className="text-lg title-font  tracking-widest mb-4">Special Treatments <i className="text-green-500 fa-lg far fa-check-circle"></i></h2>
                                        <div className="flex border-t border-gray-200 py-2">
                                            <span className="text-gray-500">Sprei</span>
                                            <span className="ml-auto text-gray-900">1</span>
                                        </div>
                                        <div className="flex border-t border-gray-200 py-2">
                                            <span className="text-gray-500">Gorden</span>
                                            <span className="ml-auto text-gray-900">5</span>
                                        </div>
                                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                                            <span className="text-gray-500">Selimut</span>
                                            <span className="ml-auto text-gray-900">3</span>
                                        </div>
                                        <div className="flex border-gray-200 py-2 -mt-4">
                                            <input type="number" placeholder="input weight" class="input input-bordered w-full" />
                                        </div>
                                        <hr />
                                        <div className="flex mt-3">
                                            <span className="title-font font-medium text-2xl text-gray-900">RP 200.000</span>
                                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Process</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}