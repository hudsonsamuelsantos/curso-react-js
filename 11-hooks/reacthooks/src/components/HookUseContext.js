import { createContext } from "react";

export const SomeContext = createContext()

export const HookUseContext = ({ children }) => {
    const contextValue = 'Valor vindo do contexto'
    const contextNumber = 10

    return (
        <SomeContext.Provider value={{ contextValue, contextNumber }}>
            {children}
        </SomeContext.Provider>
    )
}