import type { HistoryItem } from "../types/api";

type Props = {
    history: HistoryItem[]
    loadRequest: (item: HistoryItem) => void
}

export default function HistoryPanel({ history, loadRequest }: Props){
    return (
        <div className="bg-white p-6 rounded-lg shadow h-fit">
            <h2 className="text-xl font-semibold mb-4">History</h2>

            <div className="flex flex-col gap-2">
                {history.map((item, index) => (
                    <button
                        key={index}
                        onClick={() => loadRequest(item)}
                        className="border rounded p-2 text-left hover:bg-slate-100 font-mono text-sm"
                    >
                        <span className="font-mono text-sm">
                            {item.method} {item.url}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    )
}