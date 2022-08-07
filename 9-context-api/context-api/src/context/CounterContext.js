// Criando contexto
import { createContext, useState } from "react";

export const CounterContext = createContext()
//Criando provider
export const CounterContextProvider = ({children}) => {

    const [counter, setCounter] = useState(1)

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    )
}