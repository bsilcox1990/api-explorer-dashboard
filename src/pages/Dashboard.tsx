import { useState } from "react";
import type { HistoryItem } from "../types/api";
import RequestBuilder from "../components/RequestBuilder";
import ResponseViewer from "../components/ResponseViewer";
import HistoryPanel from "../components/HistoryPanel";

export default function Dashboard() {
    const [response, setResponse] = useState(null);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [method, setMethod] = useState("GET");
    const [url, setUrl] = useState("");
    const [body, setBody] = useState("");

    function loadRequest(item: HistoryItem) {
        setMethod(item.method);
        setUrl(item.url);
        setBody(item.body || "");
    }

    return(
    <div className="min-h-screen bg-slate-100 p-8">

      <div className="max-w-7xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          API Explorer
        </h1>

        <div className="grid grid-cols-3 gap-6">

          <HistoryPanel history={history} loadRequest={loadRequest} />

          <div className="bg-white p-6 rounded-lg shadow">
            <RequestBuilder 
                setResponse={setResponse} 
                history={history} 
                setHistory={setHistory}
                method={method}
                setMethod={setMethod}
                url={url}
                setUrl={setUrl}
                body={body}
                setBody={setBody}
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <ResponseViewer response={response} />
          </div>


        </div>

      </div>

    </div>
    )
}