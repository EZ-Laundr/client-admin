import { useHistory } from 'react-router'
import TrMaster from './TrMaster'
import '../index.css'

export default function TableMaster({ data, type }) {
    const history = useHistory()
    function add() {
        if (type === 'services') {
            history.push('/services/add')
        } else if (type === 'perfumes') {
            history.push('/perfumes/add')
        } else if (type === 'special treatments') {
            history.push('/specials/add')
        }
    }

    return (
        <>
            <div className="overflow-x-auto">
                <button onClick={add} className="btn btn-outline btn-primary mb-2"><i className="mr-3 fas fa-plus-circle"></i>Add {type}</button>
                <div className="overflow-auto h-96">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((el, i) => {
                                    return <TrMaster key={el.id} el={el} i={i} type={type} />
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}