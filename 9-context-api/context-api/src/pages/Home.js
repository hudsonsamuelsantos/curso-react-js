import { useContext } from "react"
import { CounterContext } from "../context/CounterContext"

function Home() {
  
  const { counter } = useContext(CounterContext)

  return (
    <div>
      <h2>Número do contador: {counter}</h2>
    </div>
  )
}

export default Home