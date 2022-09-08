import React, { useEffect, useRef, useState } from 'react'

const HookUseRef = () => {

    const numberRef = useRef(-1)
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    const inputRef = useRef()
    const [text, setText] = useState('')

    useEffect(() => {
        numberRef.current = numberRef.current + 1
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        setText('')

        inputRef.current.focus()
    }

    return (
        <div>
            <hr />
            <h2>useRef</h2>
            <p>O componente renderizou: {numberRef.current == -1 ? 0 : numberRef.current} vezes</p>
            <p>Counter 1: {counter1}</p>
            <button onClick={() => setCounter1(counter1 + 1)}>Contador A</button>
            <p>Counter 2: {counter2}</p>
            <button onClick={() => setCounter2(counter2 + 1)}> Contador B</button>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={inputRef} value={text} onChange={(e) => setText(e.target.value)} />
                <input type="submit" value='Enviar' />
            </form>
        </div >
    )
}

export default HookUseRef