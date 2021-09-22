import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import '../index.css'
import { deleteService, getServices, oneService } from '../store/services/action'
import Swal from 'sweetalert2'
import { deletePerfume, getPerfumes, onePerfume } from '../store/perfumes/action'
import { deleteSpecial, getSpecials, oneSpecial } from '../store/specials/action'
import { formatPrice } from '../helpers/price'
import { useState } from 'react'
import ReactLoading from 'react-loading'

export default function TrMaster({ el, i, type }) {
    const history = useHistory()
    const dispacth = useDispatch()
    const [loading, setLoading] = useState(false)
    const [loadingDelete, setLoadingDelete] = useState(false)

    async function edit() {
        const id = el.id
        let result
        if (type === 'services') {
            setLoading(true)
            result = await dispacth(oneService(id))
            if (result) {
                setLoading(false)
                history.push(`/services/edit/${id}`)
            }
        } else if (type === 'perfumes') {
            setLoading(true)
            result = await dispacth(onePerfume(id))
            if (result) {
                setLoading(false)
                history.push(`/perfumes/edit/${id}`)
            }
        } else if (type === 'special treatments') {
            setLoading(true)
            result = await dispacth(oneSpecial(id))
            if (result) {
                setLoading(false)
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
                    setLoadingDelete(true)
                    result = await dispacth(deleteService(id))
                    if (result) {
                        setLoadingDelete(false)
                        dispacth(getServices())
                    }
                } else if (type === 'perfumes') {
                    setLoadingDelete(true)
                    result = await dispacth(deletePerfume(id))
                    if (result) {
                        setLoadingDelete(false)
                        dispacth(getPerfumes())
                    }
                } else if (type === 'special treatments') {
                    setLoadingDelete(true)
                    result = await dispacth(deleteSpecial(id))
                    if (result) {
                        setLoadingDelete(false)
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
                    <img src={el.imageUrl} alt={el.name} width="100" height="100" />
                </td>
                <td className="">
                    <button onClick={edit} className="p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-yellow-500">
                        {
                            loading ? (
                                <ReactLoading type={'cylon'} color={'blue'} height={20} width={20} />
                            ) : (<i className="fa-lg far fa-edit"></i>)
                        }
                    </button>
                    <button onClick={serviceDelete} className="p-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-500">
                        {
                            loadingDelete ? (
                                <ReactLoading type={'cylon'} color={'blue'} height={20} width={20} />
                            ) : (<i className="fa-lg far fa-trash-alt"></i>)
                        }
                    </button>
                </td>
            </tr>
        </>
    )
}