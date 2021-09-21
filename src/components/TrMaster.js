import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import '../index.css'
import { deleteService, getServices, oneService } from '../store/services/action'
import Swal from 'sweetalert2'
import { deletePerfume, getPerfumes, onePerfume } from '../store/perfumes/action'
import { deleteSpecial, getSpecials, oneSpecial } from '../store/specials/action'
import { formatPrice } from '../helpers/price'

export default function TrMaster({ el, i, type }) {
    const history = useHistory()
    const dispacth = useDispatch()
    async function edit() {
        const id = el.id
        let result
        if (type === 'services') {
            result = await dispacth(oneService(id))
            if (result) {
                history.push(`/services/edit/${id}`)
            }
        } else if (type === 'perfumes') {
            result = await dispacth(onePerfume(id))
            if (result) {
                history.push(`/perfumes/edit/${id}`)
            }
        } else if (type === 'special treatments') {
            result = await dispacth(oneSpecial(id))
            if (result) {
                history.push(`/specials/edit/${id}`)
            }
        }
    }
    async function serviceDelete() {
        const id = el.id
        let result
        try {
            const { isConfirmed } = await Swal.fire({
                title: 'Are you sure?',
                text: "You sure delete this ?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
            })
            if (isConfirmed) {
                if (type === 'services') {
                    result = await dispacth(deleteService(id))
                    if (result) {
                        dispacth(getServices())
                    }
                } else if (type === 'perfumes') {
                    result = await dispacth(deletePerfume(id))
                    if (result) {
                        dispacth(getPerfumes())
                    }
                } else if (type === 'special treatments') {
                    result = await dispacth(deleteSpecial(id))
                    if (result) {
                        dispacth(getSpecials())
                    }
                }
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
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
                <td>{formatPrice(el.price)}</td>
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