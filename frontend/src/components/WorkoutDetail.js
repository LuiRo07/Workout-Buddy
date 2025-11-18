import { useState } from 'react'
import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from "../hooks/useAuthContext"
import API_BASE_URL from "../config/api"

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetail = ({ workout }) => {
    const { dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()
    
    // Edit state management
    const [isEditing, setIsEditing] = useState(false)
    const [editTitle, setEditTitle] = useState(workout.title)
    const [editLoad, setEditLoad] = useState(workout.load)
    const [editReps, setEditReps] = useState(workout.reps)
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleDelete = async () => {
        if (!user) {
            return
        }

        if (!window.confirm('Are you sure you want to delete this workout?')) {
            return
        }

        const response = await fetch(`${API_BASE_URL}/api/workouts/` + workout._id, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${user.token}`
            }
        })

        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_WORKOUT', payload: json})
        }
    }

    const handleEdit = () => {
        setIsEditing(true)
        setError(null)
    }

    const handleCancelEdit = () => {
        setIsEditing(false)
        setEditTitle(workout.title)
        setEditLoad(workout.load)
        setEditReps(workout.reps)
        setError(null)
    }

    const handleUpdateWorkout = async (e) => {
        e.preventDefault()
        
        if (!user) {
            setError('You must be logged in')
            return
        }

        setIsLoading(true)
        setError(null)

        const updatedWorkout = {
            title: editTitle,
            load: editLoad,
            reps: editReps
        }

        try {
            const response = await fetch(`${API_BASE_URL}/api/workouts/${workout._id}`, {
                method: 'PATCH',
                body: JSON.stringify(updatedWorkout),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                }
            })

            const json = await response.json()

            if (!response.ok) {
                setError(json.error)
                setIsLoading(false)
                return
            }

            if (response.ok) {
                dispatch({ type: 'UPDATE_WORKOUT', payload: json })
                setIsEditing(false)
                setIsLoading(false)
            }
        } catch (error) {
            setError('Failed to update workout')
            setIsLoading(false)
        }
    }

    return (
        <div className="workout-details">
            {!isEditing ? (
                // Display mode
                <>
                    <h4>{workout.title}</h4>
                    <p><strong>Load (kg): </strong>{workout.load}</p>
                    <p><strong>Reps: </strong>{workout.reps}</p>
                    <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
                    <div className="workout-actions">
                        <span 
                            className="material-symbols-outlined edit-icon" 
                            onClick={handleEdit}
                            title="Edit workout"
                        >
                            edit
                        </span>
                        <span 
                            className="material-symbols-outlined delete-icon" 
                            onClick={handleDelete}
                            title="Delete workout"
                        >
                            delete
                        </span>
                    </div>
                </>
            ) : (
                // Edit mode
                <form onSubmit={handleUpdateWorkout} className="edit-workout-form">
                    <div className="form-group">
                        <label>Exercise Title:</label>
                        <input 
                            type="text" 
                            value={editTitle}
                            onChange={(e) => setEditTitle(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Load (kg):</label>
                        <input 
                            type="number" 
                            value={editLoad}
                            onChange={(e) => setEditLoad(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-group">
                        <label>Reps:</label>
                        <input 
                            type="number" 
                            value={editReps}
                            onChange={(e) => setEditReps(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="form-actions">
                        <button 
                            type="submit" 
                            disabled={isLoading}
                            className="save-btn"
                        >
                            {isLoading ? 'Saving...' : 'Save'}
                        </button>
                        <button 
                            type="button" 
                            onClick={handleCancelEdit}
                            className="cancel-btn"
                            disabled={isLoading}
                        >
                            Cancel
                        </button>
                    </div>
                    
                    {error && <div className="error">{error}</div>}
                </form>
            )}
        </div>
    )
}

export default WorkoutDetail