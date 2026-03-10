import { useState } from "react";
import RequestBuilder from "../components/RequestBuilder";
import ResponseViewer from "../components/ResponseViewer";

export default function Dashboard() {
    const [response, setResponse] = useState(null);

    return(
        <div className="p-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6">API Explorer</h1>

            <div className="grid grid-cols-2 gap-6">
                <RequestBuilder setResponse={setResponse} />
                <ResponseViewer response={response} />
            </div>
        </div>
    )
}