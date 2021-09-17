import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../index.css'


export default function Home() {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className=" flex-grow min-h-16">
                        <div className="container px-5 py-10 mx-auto">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900 flex justify-center">Customers</h1>
                            <div className="overflow-x-auto">
                                <table className="table w-full table-zebra">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Customer Name</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>Customer 1</td>
                                            <td>Progress</td>
                                            <td>Detail</td>
                                        </tr>
                                        <tr>
                                            <th>2</th>
                                            <td>Customer 2</td>
                                            <td>Selesai</td>
                                            <td>Detail</td>
                                        </tr>
                                        <tr>
                                            <th>3</th>
                                            <td>Customer 3</td>
                                            <td>Dicuci</td>
                                            <td>Detail</td>
                                        </tr>
                                        <tr>
                                            <th>4</th>
                                            <td>Customer 4</td>
                                            <td>Ngilang</td>
                                            <td>Detail</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}