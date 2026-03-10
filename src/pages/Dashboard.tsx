import { useState } from "react";
import RequestBuilder from "../components/RequestBuilder";
import ResponseViewer from "../components/ResponseViewer";

export default function Dashboard() {
    const [response, setResponse] = useState(null);

    return(
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          API Explorer
        </h1>

        <div className="grid grid-cols-2 gap-6">

          <div className="bg-white p-6 rounded-lg shadow">
            <RequestBuilder setResponse={setResponse} />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <ResponseViewer response={response} />
          </div>

        </div>

      </div>

    </div>
    )
}