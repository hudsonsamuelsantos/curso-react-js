import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function ChangeCounter() {

    const { counter, setCounter } = useContext(CounterContext)

  return (
    <button onClick={() => setCounter(counter + 1)}>Clique para incrementar</button>
  )
}

export default ChangeCounter