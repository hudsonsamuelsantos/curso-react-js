import { useEffect, useState } from "react"

export const useFecth = (url) => {
    const [data, setData] = useState(null)

    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [itemId, setItemId] = useState(null)

    const httpConfig = ( data, method ) => {
    if (method === "POST") {
        setConfig({
            method,     
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    } else if (method === "DELETE") {
        setConfig({
            method,     
            headers: {
                "Content-Type": "application/json"
            },
        })
    }

    setMethod(method)
    setItemId(data)
    } 

    useEffect(() => {
        const fecthData = async () => {

            setLoading(true)

            try {
                const res = await fetch(url)

                const json = await res.json()

                setData(json)
            } catch (error) {
                console.log(error.message)
                
                setError("Houve um erro ao carregar os dados! Tente novamente mais tarde...")
            }
            
            setLoading(false)
        }

        fecthData()
    }, [url, callFetch])

    useEffect(() => {
        const httpRequest = async () => {

            let json

            if (method === "POST") {
                let fetchOptions = [url, config]
    
                const res = await fetch(...fetchOptions)
    
                json = await res.json()

            } else if (method === "DELETE") {

                const deleteUrl = `${url}/${itemId}`

                const res = await fetch(deleteUrl, config)

                json = await res.json()

            }

            setCallFetch(json)
        }

        httpRequest()
    },[config, method, url, itemId])

    return { data, httpConfig, loading, error }
}