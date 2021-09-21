import "../index.css";

export default function TrTreatment({ el, i }) {
    return (
        <>
            <tr>
                <th>{i + 1}</th>
                <td>{el.SpecialTreatment.name}</td>
                <td>{el.price}</td>
                <td>{el.quantity}</td>
                <td>{Number(el.price) * Number(el.quantity)}</td>
            </tr>
        </>
    );
}


