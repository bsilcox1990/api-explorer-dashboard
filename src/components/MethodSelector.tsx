type Props = {
    method: string
    setMethod: (method: string) => void
}

export default function MethodSelector({ method, setMethod }: Props) {
    return (
        <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="border p=2 rounded"
        >
            <option>GET</option>
            <option>POST</option>
            <option>PUT</option>
            <option>DELETE</option>
            <option>PATCH</option>
        </select>
    )
}