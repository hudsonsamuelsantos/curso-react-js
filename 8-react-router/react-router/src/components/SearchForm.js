import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SearchForm() {
  
    {/* Envia o parâmetro para a url */}
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = e => {
        e.preventDefault()

        navigate('/search?q=' + query)
    }

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" onChange={e => setQuery(e.target.value)}/>
        <input type="submit" value='Buscar' />
    </form>
  )
}

export default SearchForm