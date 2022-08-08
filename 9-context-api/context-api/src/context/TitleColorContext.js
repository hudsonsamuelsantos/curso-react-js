import { createContext, useReducer } from "react";

export const TitleColorContext = createContext()

export const titleColorReducer = (state, action) = {
 
}

export const TitleColorContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(titleColorReducer, { color: 'purple' })

    console.log(state)

    return (
        <TitleColorContextProvider value={{...state}}>
            {children}
        </TitleColorContextProvider>
    )
}