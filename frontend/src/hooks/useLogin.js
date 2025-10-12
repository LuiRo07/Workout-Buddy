import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import API_BASE_URL from '../config/api'

export const useLogin = () => {
    const [error, setError ] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch(`${API_BASE_URL}/api/user/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if (response.ok) {
            // save user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // Update the Auth Context
            dispatch({ type: 'LOG_IN', payload: json })

            setIsLoading(false)
        }
    }
    
    return { login, isLoading, error}
} 
