import React from 'react';

const LoadingSpinner = ({ message = "Loading..." }) => {
  return (
    <div className="loading">
      {message}
    </div>
  );
};

export default LoadingSpinner;