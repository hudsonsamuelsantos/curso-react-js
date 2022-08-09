//import { useContext } from "react"
import ChangeCounter from "../components/ChangeCounter"
import { useCounterContext } from "../hooks/useCounterContext"
import { useTitleColorContext } from "../hooks/useTitleColorContext"
//import { CounterContext } from "../context/CounterContext"

function Home() {
  
  //const { counter } = useContext(CounterContext)

  // Utilização do Hook personalizado para o contexto 
  const { counter } = useCounterContext()

  const { color, dispatch } = useTitleColorContext()

  const setTitleColor = color => {
    dispatch({ type: color })
  }

  return (
    <div>
      <h2 style={{ color: color }}>Número do contador: {counter}</h2>
      <ChangeCounter />
      <div>
        <button onClick={() => setTitleColor('RED')}>Vermelho</button>
        <button onClick={() => setTitleColor('BLUE')}>Azul</button>
      </div>
    </div>
  )
}

export default Home