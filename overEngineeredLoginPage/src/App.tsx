import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';

import { post } from './helpers/helper';

import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { checkSessionSuccess, logout } from './store/user';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const sessionToken = localStorage.getItem('sessionToken');

    if (sessionToken) {
      const user = post('http://localhost:8080/auth/findUserBySessionId', { sessionToken: sessionToken })
        .then((res) => {
          console.log(res);
          dispatch(checkSessionSuccess(res));
        })
        .catch((err) => {
          console.log(err);
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
      </Routes>
    </div>
  );
}

export default App;
