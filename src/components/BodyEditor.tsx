type Props = {
    body: string
    setBody: (body: string) => void
}

export default function BodyEditor({ body, setBody }: Props){
    return (
        <div>
            <h3 className="font-medium mb-2">Body (JSON)</h3>

            <textarea
                placeholder={`
                "name": "Brad",
                "email": "test@test.com"
                `}
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="w-full border rounded p-2 font-mono text-sm h-32"
            />
        </div>
    )
}