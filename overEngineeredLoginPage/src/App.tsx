import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Cookies from 'js-cookie';

import ProtectedRoute from './helpers/ProtectedRoute';
import Profile from './Components/Profile';

import { post } from './helpers/helper';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { checkSessionSuccess, logout } from './store/user';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const sessionToken = Cookies.get('sessionToken');
    if (sessionToken) {
      post('https://oel-api-c91f06239a18.herokuapp.com/auth/findUserBySessionId', { sessionToken })
        .then((res) => {
          dispatch(checkSessionSuccess(res));
        })
        .catch(() => {
          dispatch(logout());
        });
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen min-w-screen bg-custom-background">
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
