import { useSelector } from 'react-redux';
import { useLocation, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  const location = useLocation();
  const [timeoutExpired, setTimeoutExpired] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeoutExpired(true);
    }, 250);

    return () => clearTimeout(timeout);
  }, []);

  if (!timeoutExpired) {
    return <div className="flex w-full h-screen justify-center items-center text-white">Loading...</div>;
  } else {
    if (!user.isAuthenticated) {
      return <Navigate to="/login" />;
    }
  }

  return children;
};

export default ProtectedRoute;
