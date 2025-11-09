import { useState, useEffect } from 'react'
import { useResetPassword } from '../hooks/useResetPassword'

const ResetPassword = () => {
    const [email, setEmail] = useState('')
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmedPassword, setConfirmedPassword] = useState('')
    const { resetPassword, error, successMessage, isLoading } = useResetPassword()

    // Clear form fields when password reset is successful
    useEffect(() => {
        if (successMessage) {
            setEmail('')
            setCurrentPassword('')
            setNewPassword('')
            setConfirmedPassword('')
        }
    }, [successMessage])

    const handleSubmit = async (e) => {
        e.preventDefault()

        await resetPassword(email, currentPassword, newPassword, confirmedPassword)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Reset Password</h3>

            <label>Email</label>
            <input 
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Current Passowrd</label>
            <input 
                type="password"
                onChange={(e) => setCurrentPassword(e.target.value)}
                value={currentPassword}
            />

            <label>New Password:</label>
            <input 
                type="password"
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
            />

            <label>Confirm Password:</label>
            <input 
                type="password"
                onChange={(e) => setConfirmedPassword(e.target.value)}
                value={confirmedPassword}
            />

            <button disabled={isLoading}>
                {isLoading ? 'Resetting...' : 'Reset'}
            </button>
            {error && <div className="error">{error}</div>}
            {successMessage && <div className="success">{successMessage}</div>}
        </form>
    )
}

export default ResetPassword