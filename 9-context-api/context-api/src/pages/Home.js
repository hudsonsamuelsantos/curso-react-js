import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"
import { CounterContext } from "../context/CounterContext"

function Home() {
  
  const { counter } = useContext(CounterContext)

  return (
    <div>
      <h2>Número do contador: {counter}</h2>
      <ChangeCounter />
    </div>
  )
}

export default Home