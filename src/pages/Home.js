import { useHistory } from 'react-router'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import '../index.css'


export default function Home() {
    const history = useHistory()
    function detail() {
        const id = 1
        history.push(`/detail/${id}`)
    }
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
                                            <th>Order ID</th>
                                            <th>Customer Name</th>
                                            <th>Service</th>
                                            <th>Status</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>1</td>
                                            <td>Bambang</td>
                                            <td>Cuci Aja</td>
                                            <td>Progress</td>
                                            <td>
                                                <button onClick={detail} className="btn btn-accent ">Detail</button>
                                            </td>
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