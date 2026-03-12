import type { HistoryItem } from "../types/api";

type Props = {
    history: HistoryItem[]
    loadRequest: (item: HistoryItem) => void
}

export default function HistoryPanel({ history, loadRequest }: Props){

    function getMethodColor(method:string){
        switch (method){
            case "GET":
                return "bg-green-500"
            case "POST":
                return "bg-blue-500"
            case "PUT":
                return "bg-yellow-500"
            case "PATCH":
                return "bg-purple-500"
            case "DELETE":
                return "bg-red-500"
            default:
                return "bg-gray-500"
        }
    }
    return (
        <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">History</h2>

            <div className="flex flex-col gap-2 max-h-[500px] overflow-y-auto">
                {history.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => loadRequest(item)}
                        className="border rounded p-2 text-left hover:bg-slate-100 flex items-center gap-2"
                    >
                        <span className={`text-white text-cs px-2 py-1 rounded ${getMethodColor(item.method)}`}>
                            {item.method}
                        </span>
                        <span className="font-mono text-sm truncate max-w-[220px]">
                            {item.url}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}