import { db } from '../firebase/config'

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth'
import { useEffect } from 'react'
import { useState } from 'react'

export const useAuthentication = () => {

    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //cleanup

    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    const checkIfIsCancelled = () => {
        if (cancelled) {
            return
        }
    }

    //register

    const createUser = async (data) => {

        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName,
            })

            setLoading(false)

            return user

        } catch (error) {
            
            console.log(error)
            console.log(typeof error.message)

            let systemErrorMessage

            if(error.message.includes('Password')) {
                systemErrorMessage = 'A senha precisa conter no mínimo 6 caracteres.'
            } else if (error.message.includes('email-already')) {
                systemErrorMessage = 'E-mail já cadastrado. Tente novamente.'
            } else {
                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'
            }

            setLoading(false)
            setError(systemErrorMessage)

        }
    }

    //logout 

    const logout = () => {
        
        signOut(auth)

    }

    //login

    const login = async (data) => {

        checkIfIsCancelled()

        setLoading(true)
        setError(null)

        try {
            
            await signInWithEmailAndPassword(auth, data.email, data.password)

            setLoading(false)

        } catch (error) {
            
            let systemErrorMessage

            if(error.message.includes('user-not-found')) {
                systemErrorMessage = 'Usuário não encontrado.'
            } else if (error.message.includes('wrong-password')) {
                systemErrorMessage = 'Senha incorreta.'
            } else {
                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'
            }

            setLoading(false)
            setError(systemErrorMessage)

        }
    }

    useEffect(() => {
        return () => setCancelled(true)
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    }

}