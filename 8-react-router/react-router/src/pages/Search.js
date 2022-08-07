import { Link, useSearchParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

function Search() {
    {/* Adiciona parâmetros de busca na requisição */}
    const [searchParams] = useSearchParams()

    const url = 'http://localhost:3000/products?' + searchParams

    const { data: items } = useFetch(url)
  
    return (
    <>
        <h2>Resultados disponíveis:</h2>

        <div>
        <ul className="products">
          {items && items.map(item => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>

              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Search