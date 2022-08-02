import { useEffect, useState } from "react"

export const useFecth = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {

        const fecthData = async () => {

            const res = await fetch(url)

            const json = await res.json()

            setData(json)
        }

        fecthData()
    }, [url])

    return { data }
}