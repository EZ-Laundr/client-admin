import '../index.css'
import TrOrder from './TrOrder'

export default function TableOrder({ data }) {
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra ">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Order ID</th>
                            <th>Status Pembayaran</th>
                            <th>Layanan</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((el, i) => {
                                return <TrOrder key={el.id} el={el} i={i} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}