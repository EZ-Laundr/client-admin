import { useHistory } from 'react-router'
import '../index.css'
import TrMaster from './TrMaster'

export default function TableMaster({ data }) {
    const history = useHistory()
    function add() {
        history.push('/services/add')
    }

    return (
        <>
            <div className="overflow-x-auto">
                <button onClick={add} className="btn btn-outline btn-primary mb-2"><i className="mr-3 fas fa-plus-circle"></i>Add Services</button>
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
                                return <TrMaster key={el.id} el={el} i={i} />
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}