import { useContext } from "react"
import { AppContext } from "../App"

export function Context() {

    const details = useContext(AppContext)

    return (
        <>
            {details && (
                <div>
                    <h2>Usuário: {details.user}</h2>
                    <p>Idade: {details.age}</p>
                    <p>É ADM: {details.isAdmin ? "Sim" : "Não"}</p>
                </div>
            )}
        </>
    )
}