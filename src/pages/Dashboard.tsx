import { useState } from "react";
import RequestBuilder from "../components/RequestBuilder";
import ResponseViewer from "../components/ResponseViewer";

export default function Dashboard() {
    const [response, setResponse] = useState(null);

    return(
        <div className="grid grid-cols-2 gap-4 p-6">
            <RequestBuilder setResponse={setResponse} />
            <ResponseViewer response={response} />
        </div>
    )
}