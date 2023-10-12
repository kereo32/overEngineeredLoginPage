import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState, useEffect, ReactNode } from 'react';

type UserState = {
  user: {
    isAuthenticated: boolean;
    user: {
      userInformation: {
        username: string;
        email: string;
      } | null;
    };
  };
};

type ProtectedRouteProps = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const user = useSelector((state: UserState) => state.user);
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
