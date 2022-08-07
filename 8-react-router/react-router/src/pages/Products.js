import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

function Products() {

    const { id } = useParams()

    const url = 'http://localhost:3000/products/' + id

    const { data: products, error, loading,} = useFetch(url)

    console.log(products)

  return (
    <>
        <p>Id do produto: { id }</p>

        {error && <p>Ocorreu um erro ao carregaros dados! Tente novamente...</p>}
        {loading && <p>Carregando...</p>}
        {products &&
          <ul className="products">
            <li>
              <h2>{products.name}</h2>
              <p>R$: {products.price}</p>
            </li>
          </ul>
        }
    </>
  )
}

export default Products