import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import TableMaster from '../../components/TableMaster'
import '../../index.css'
import { getPerfumes } from '../../store/perfumes/action'


export default function Perfume({ changeLogin }) {
    const dispacth = useDispatch()
    const history = useHistory()
    const { perfumes, isLoadingPerfume } = useSelector(store => {
        return store.perfumes
    })
    useEffect(() => {
        if (!localStorage.getItem('access_token')) {
            history.push('/login')
        }
        dispacth(getPerfumes())
    }, [])


    return (
        <>
            <div className="flex">
                <Sidebar changeLogin={changeLogin} />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className=" flex-grow min-h-16">
                        <div className="container px-5 py-8 mx-auto">
                            {
                                isLoadingPerfume ? (
                                    <div className="flex justify-center items-center h-96">
                                        <img src="https://i.ibb.co/mGH9RHc/logo-dashboard-removebg-preview.png" className="animate-bounce w-40" alt="logo-dashboard" border="0" />
                                    </div>
                                ) : (
                                    <div>
                                        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 flex justify-center">Perfumes</h1>
                                        <TableMaster data={perfumes} type="perfumes" />
                                    </div>
                                )
                            }
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}