import { useState, ChangeEvent } from "react"

export function State() {

    const [text, setText] = useState<string | null>("testando hook")

    const handleText = (e: ChangeEvent<HTMLInputElement>) => {

        setText(e.target.value)

    }

    return (
        <div>
            <span>O texto é: {text}</span>
            <input type="text" onChange={handleText} />
        </div>
    )
}