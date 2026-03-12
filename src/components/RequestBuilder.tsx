import { useState } from "react";
import axios from "axios";
import HeadersEditor from "./HeadersEditor";
import MethodSelector from "./MethodSelector";
import UrlInput from "./UrlInput";
import BodyEditor from "./BodyEditor";
import type { HistoryItem } from "../types/api";

type Props = {
    method: string
    setMethod: (method: string) => void
    url: string
    body: string
    setBody: (body: string) => void
    setUrl: (url: string) => void
    setResponse: (data: any) => void
    history: HistoryItem[]
    setHistory: React.Dispatch<React.SetStateAction<HistoryItem[]>>
}

export default function RequestBuilder({ method, setMethod, url, setUrl, body, setBody, setResponse, setHistory}: Props){
    const [headers, setHeaders] = useState([{ key: "", value: ""}]);
    const [loading, setLoading] = useState(false);

    const sendRequest = async () => {
        let parsedBody = undefined;

        if (body) {
            try {
                parsedBody = JSON.parse(body);
            } catch{
                alert("Invalid JSON body");
                return
            }
        }

        const formattedHeaders = headers.reduce((acc, header) => {
            if(header.key) {
                acc[header.key] = header.value
            }
            return acc
        }, {} as Record<string, string> )

        setLoading(true);

        try {
            const start = performance.now();

            const res = await axios({
                method,
                url,
                headers: formattedHeaders, 
                data: parsedBody
            })

            const end = performance.now();

            setResponse({
                data: res.data,
                status: res.status,
                time: Math.round(end - start),
                size: JSON.stringify(res.data).length
            });

            setHistory((prev) => [
                {
                    method,
                    url,
                    body
                },
                ...prev.slice(0, 9)
            ])

        }catch (error){
            console.error(error);
        }

        setLoading(false);
    }

    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-4">Request</h2>

            <div className="flex flex-col gap-4">
                <MethodSelector method={method} setMethod={setMethod}/>
                <UrlInput url={url} setUrl={setUrl} />
                <HeadersEditor headers={headers} setHeaders={setHeaders} />
                <BodyEditor body={body} setBody={setBody} />
            </div>

            <button
                onClick={sendRequest}
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 mt-4 rounded transition"
            >
                {loading ? "Sending..." : "Send Request"}
            </button>
        </div>
    )
}