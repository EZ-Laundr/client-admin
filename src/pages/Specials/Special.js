import { useHistory } from 'react-router'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import '../../index.css'


export default function Special() {
    const history = useHistory()
    function add() {
        history.push('/specials/add')
    }
    function edit() {
        const id = 1
        history.push(`/specials/edit/${id}`)
    }
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className=" flex-grow min-h-16">
                        <div className="container px-5 py-10 mx-auto">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900 flex justify-center">Special Treatments</h1>
                            <div className="overflow-x-auto">
                                <button onClick={add} className="btn btn-outline btn-primary mb-2"><i className="mr-3 fas fa-plus-circle"></i>Add Special Treatment</button>
                                <table className="table w-full table-zebra">
                                    <thead>
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th>1</th>
                                            <td>Cuci Strika</td>
                                            <td>6000</td>
                                            <td className="flex">
                                                <button onClick={edit} className="p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500"><i className="fa-lg far fa-edit"></i></button>
                                                <button className="p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-500"> <i className="fa-lg far fa-trash-alt"></i></button>
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