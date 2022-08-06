import { useParams } from "react-router-dom"

function Products() {

    const { id } = useParams()

  return (
    <>
        <p>Id do produto: { id }</p>
    </>
  )
}

export default Products