//import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"
import { useCounterContext } from "../hooks/useCounterContext"
//import { CounterContext } from "../context/CounterContext"

function Home() {
  
  //const { counter } = useContext(CounterContext)

  // Utilização do Hook personalizado para o contexto 
  const { counter } = useCounterContext()

  return (
    <div>
      <h2>Número do contador: {counter}</h2>
      <ChangeCounter />
    </div>
  )
}

export default Home