type Props = {
    url: string
    setUrl: (url: string) => void
}

export default function UrlInput({ url, setUrl }: Props){
    return (
        <input
            type="text"
            placeholder="Enter API URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="border p-2 rounded w-full"
        />
    )
}