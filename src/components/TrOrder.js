import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import orderApi from '../apis/order'
import '../index.css'
import { getOrders, oneOrder } from '../store/orders/action'
import 'animate.css'
import Swal from 'sweetalert2'
import { useState } from 'react'

export default function TrOrder({ el, i }) {
    const history = useHistory()
    const dispacth = useDispatch()
    const [loading, setLoading] = useState(false)

    async function detail() {
        const id = el.id
        try {
            const result = await dispacth(oneOrder(id))
            if (result) {
                history.push(`/detail/${id}`)
            }
        } catch (err) {
            console.log(err)
        }

    }

    async function updateStatus() {
        try {
            const { isConfirmed } = await Swal.fire({
                title: 'Are you sure?',
                text: "You want to change order status ?!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, change it!'
            })
            if (isConfirmed) {
                setLoading(true)
                const result = await orderApi({
                    method: 'patch',
                    url: `/${el.id}`
                })
                if (result) {
                    setLoading(false)
                    dispacth(getOrders())
                }
            }

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <>
            <tr>
                <th>{i + 1}</th>
                <td>{el.id}</td>
                <td>{el.User.email}</td>
                <td>{el.Service.name}</td>
                <td className="animate__animated animate__zoomIn ">
                    <div className={
                        el.status === 'pending' ? ' badge badge-warning badge-lg' : el.status === 'On Progress' ? ' badge badge-info badge-lg' : ' badge badge-success badge-lg'
                    }>
                        {el.status}
                    </div>
                </td>
                <td className="space-x-3">
                    <button onClick={detail} className="btn btn-primary hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">Detail</button>
                    {
                        el.status === 'On Progress' && (
                            <button onClick={updateStatus} className={loading ? 'btn btn-accent loading' : "btn btn-accent hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"}>{!loading && 'Done'}</button>
                        )
                    }
                </td>
            </tr>
        </>
    )
}