import { useState } from 'react'
import API_BASE_URL from '../config/api'

export const useResetPassword = () => {
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)
    const [isLoading, setIsLoading] = useState(null)

    const resetPassword = async (email, currentPassword, newPassword, confirmedPassword) => {
        setIsLoading(true)
        setError(null)
        setSuccessMessage(null) // Clear previous success message

        const response = await fetch(`${API_BASE_URL}/api/user/reset-password`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, currentPassword, newPassword, confirmedPassword})
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error);
        }

        if (response.ok) {
            setIsLoading(false)
            setSuccessMessage(json.message)
            setError(null) // Clear any previous errors
        }
    }

    const clearMessages = () => {
        setError(null)
        setSuccessMessage(null)
    }

    return { resetPassword, clearMessages, error, successMessage, isLoading }
}
