import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import '../index.css'
import { deleteService, getServices, oneService } from '../store/services/action'

export default function TrMaster({ el, i }) {
    const history = useHistory()
    const dispacth = useDispatch()
    async function edit() {
        const id = el.id
        const result = await dispacth(oneService(id))
        if (result) {
            history.push(`/services/edit/${id}`)
        }
    }
    async function serviceDelete() {
        try {
            const result = await dispacth(deleteService(el.id))
            if (result) {
                dispacth(getServices())
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <tr>
                <th>{i + 1}</th>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td className="w-60">
                    <img src={el.imageUrl} alt={el.name} width="200" height="100" />
                </td>
                <td className="">
                    <button onClick={edit} className="p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500"><i className="fa-lg far fa-edit"></i></button>
                    <button onClick={serviceDelete} className="p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-500"> <i className="fa-lg far fa-trash-alt"></i></button>
                </td>
            </tr>
        </>
    )
}