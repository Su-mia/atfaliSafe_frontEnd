import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login';
import HomeLogged from './Components/HomeLogged';
import ShowDetails from './Components/ShowDetails';
import SignUp from './Components/SignUp';
import RecommPage from './Components/RecommPage';

import './index.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/signup" element={<SignUp />} />
        <Route path="/home" element={<HomeLogged />} />
        <Route path="/recommendations" element={<RecommPage />} />
        <Route path="/details/:id" element={<ShowDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
