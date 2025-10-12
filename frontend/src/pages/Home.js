import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from '../hooks/useAuthContext'
import API_BASE_URL from "../config/api";

// components
import WorkoutDetail from "../components/WorkoutDetail";
import WorkoutForm from "../components/WorkoutForm";
import LoadingSpinner from "../components/LoadingSpinner";

const Home = () => {
  const {workouts, dispatch} = useWorkoutsContext()    
  const {user} = useAuthContext()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchWorkouts = async () => {
      setIsLoading(true);
      const response = await fetch(`${API_BASE_URL}/api/workouts`, {
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });

      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_WORKOUTS', payload: json })
      }
      setIsLoading(false);
    };

    if (user) {
      fetchWorkouts();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="workouts">
        {isLoading && <LoadingSpinner message="Loading your workouts..." />}
        {!isLoading && workouts && workouts.length === 0 && (
          <div className="no-workouts">
            <p>No workouts yet. Create your first workout!</p>
          </div>
        )}
        {!isLoading && workouts && workouts.map((workout) => (
            <WorkoutDetail key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
