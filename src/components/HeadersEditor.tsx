type Header = {
    key: string
    value: string
}

type Props = {
    headers: Header[]
    setHeaders: React.Dispatch<React.SetStateAction<Header[]>>
}

export default function HeadersEditor({ headers, setHeaders}: Props){

    const updateHeader = (index: number, field: "key" | "value", value: string) => {
        const updated = [...headers]
        updated[index][field] = value
        setHeaders(updated)
    }

    const addHeader = () => {
        setHeaders([...headers, { key: "", value: ""}])
    }

    const removeHeader = (index: number) => {
        const updated = headers.filter((_, i) => i !== index)
        setHeaders(updated)
    }

    return (
        <div className="mt-6">
            <h3 className="font-semibold mb-2">Headers</h3>

            {headers.map((header, index) => (
                <div key={index} className="flex gap-2 mb-2">

                    <input
                        placeholder="Key"
                        value={header.key}
                        onChange={(e) => updateHeader(index, "key", e.target.value)}
                        className="border p-2 rounded w-1/2"
                    />

                    <input
                        placeholder="Value"
                        value={header.value}
                        onChange={(e) => updateHeader(index, "value", e.target.value)}
                        className="border p-2 rounded w-1/2"
                    />   

                    <button
                        onClick={() => removeHeader(index)}
                        className="bg-red-500 text-white px-3 rounded"
                    >
                        X
                    </button>
                </div>
            ))}

            <button
                onClick={addHeader}
                className="mt-2 bg-gray-200 px-3 py-1 rounded"
            >
                + Add Header
            </button>
        </div>
    )
}