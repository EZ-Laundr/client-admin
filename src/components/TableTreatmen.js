import '../index.css'
import TrTreatment from './TrTreatment'

export default function TableTreatmen({ data }) {
    return (
        <>
            <div class="overflow-x-auto mb-5">
                <table class="table w-full table-zebra">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Per Item</th>
                            <th>Quantity</th>
                            <th>Total Treatments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((el, i) => {
                                return <TrTreatment key={i} el={el} i={i} />
                            })
                        }

                    </tbody>
                </table>
            </div>
        </>
    )
}