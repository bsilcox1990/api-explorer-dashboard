import { useState } from "react";
import axios from "axios";

type Props = {
    setResponse: (data: any) => void;
}

export default function RequestBuilder({setResponse}: Props){
    const [url, setUrl] = useState("");
    const [method, setMethod] = useState("GET");

    const sendRequest = async () => {
        try {
            const res = await axios({
                method,
                url
            })
            setResponse(res.data);
        }catch (error){
            console.error(error);
        }
    }

    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-3">Request Builder</h2>

            <div className="flex gap-2 mb-3">
                <select
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    className="border p-2"
                >
                    <option>GET</option>
                    <option>POST</option>
                    <option>PUT</option>
                    <option>DELETE</option>
                </select>

                <input
                    type="text"
                    placeholder="Enter API URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="border p-2 flex-1"
                />
            </div>

            <button
                onClick={sendRequest}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Send Request
            </button>
        </div>
    )
}