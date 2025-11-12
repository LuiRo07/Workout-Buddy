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

    try {
        // Add timeout for faster failure detection
        // const controller = new AbortController();
        // const timeoutId = setTimeout(() => controller.abort(), 8000); // 8 second timeout
        
        const response = await fetch(`${API_BASE_URL}/api/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Connection': 'keep-alive' // Reuse connections
            },
            body: JSON.stringify({email, password}),
            signal: controller.signal
    })

    clearTimeout(timeoutId);
    const json = await response.json()

    if (!response.ok) {
        setIsLoading(false)
        setError(json.error)
        return 
    }

    if (response.ok) {
        // Optimize: Set localStorage and context in parallel
        const userData = JSON.stringify(json)
        localStorage.setItem('user', userData)

        // Update the Auth Context
        dispatch({ type: 'LOG_IN', payload: json })

        setIsLoading(false)
    }
} catch (error) {
    setIsLoading(false)
    if (error.name === 'AbortError') {
        setError("Login timeout. Please check your connection.")
    } else {
        setError("Login failed. Please try again.")
    }
}}
    
    return { login, isLoading, error}
} 
