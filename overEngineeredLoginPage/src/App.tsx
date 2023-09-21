import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router';
import Login from './Components/Login';
import Signup from './Components/Signup';
function App() {
  console.log(Routes);
  return (
    <div className="min-h-screen bg-custom-background">
      <Navbar />
      <Routes>
        <Route path="/" />
        <Route path="/login" Component={Login} />
        <Route path="/signup" Component={Signup} />
      </Routes>
    </div>
  );
}

export default App;
