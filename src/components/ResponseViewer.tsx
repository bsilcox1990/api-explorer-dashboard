type Props = {
    response: any;
}

export default function ResponseViewer({ response }: Props){

    if (!response) {
        return (
            <div className="p-6 border rounded-lg bg-white shadow">
                <h2 className="text-xl font-semibold mb-4">Response</h2>
                <p className="text-gray-500">No reponse yet</p>
            </div>
        )
    }

    return(
        <div className="p-6 border rounded-lg bg-white shadow">
            <h2 className="text-xl font-bold mb-4">Response</h2>

            <div className="flex gap-6 text-sm mb-4">
                <div>
                    <span className="font-semibold">Status: </span>{response.status}
                </div>
                <div>
                    <span className="font-semibold">Time: </span>{response.time} ms
                </div>
                <div>
                    <span className="font-semibold">Size: </span>{response.size} bytes
                </div>
            </div>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-[500px]">
                {JSON.stringify(response.data, null, 2)}
            </pre>
        </div>
    )
}