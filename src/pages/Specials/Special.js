import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect, useHistory } from 'react-router'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import TableMaster from '../../components/TableMaster'
import '../../index.css'
import { getSpecials } from '../../store/specials/action'


export default function Special({ changeLogin }) {
    const dispacth = useDispatch()
    const history = useHistory()
    const { specials } = useSelector(store => {
        return store.specials
    })
    useEffect(() => {
        if (!localStorage.getItem('access_token')) {
            history.push('/login')
        } else {
            dispacth(getSpecials())
        }
    }, [])

    return (
        <>
            <div className="flex">
                <Sidebar changeLogin={changeLogin} />
                <div className="flex-grow flex flex-col">
                    <Navbar />
                    <div className=" flex-grow min-h-16">
                        <div className="container px-5 py-10 mx-auto">
                            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-10 text-gray-900 flex justify-center">Special Treatments</h1>
                            <TableMaster data={specials} type="special treatments" />
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    )
}