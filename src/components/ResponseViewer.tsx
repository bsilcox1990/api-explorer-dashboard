type Props = {
    response: any;
}

export default function ResponseViewer({ response }: Props){
    return(
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-3">Response</h2>

            <pre className="bg-gray-100 p-3 overflow-auto text-sm">
                {JSON.stringify(response, null, 2)}
            </pre>
        </div>
    )
}