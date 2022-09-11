import { useDebugValue, useEffect, useRef } from "react"

export const usePrevious = value => {
    const ref = useRef()

    useDebugValue('---CUSTOMHOOK---')
    useDebugValue('O valor anterior é ' + value)

    useEffect(() => {
        ref.current = value
    })

    return ref.current
}