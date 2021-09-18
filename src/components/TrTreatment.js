import '../index.css'

export default function TrTreatment({ el, i }) {
    return (
        <>
            <tr>
                <th>{i + 1}</th>
                <td>{el.name}</td>
                <td>{el.price}</td>
                <td>{el.qty}</td>
                <td>
                    {Number(el.price) * Number(el.qty)}
                </td>
            </tr>
        </>
    )
}