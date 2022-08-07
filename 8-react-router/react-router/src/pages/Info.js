import { useParams } from "react-router-dom"

function Info() {

    const { id } = useParams()

  return (
    <h2>Mais informações sobre o produto: { id }</h2>
  )
}

export default Info