import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
function App() {
  console.log(Routes);
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
