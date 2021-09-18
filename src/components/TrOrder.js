import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import '../index.css'
import { oneOrder } from '../store/orders/action'

export default function TrOrder({ el, i }) {
    const history = useHistory()
    const dispacth = useDispatch()

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

    return (
        <>
            <tr>
                <th>{i + 1}</th>
                <td>{el.id}</td>
                <td>{el.Users.name}</td>
                <td>{el.Services.name}</td>
                <td>{el.status}</td>
                <td>
                    <button onClick={detail} className="btn btn-accent ">Detail</button>
                </td>
            </tr>
        </>
    )
}