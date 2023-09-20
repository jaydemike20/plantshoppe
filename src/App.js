import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/login';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UseSelector } from 'react-redux';
import Home from './pages/Home/home';
import Welcome from './pages/Welcome/welcome';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/Home" replace /> : <Welcome />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" replace />} />

      </Routes>
    </div>
  );
}

export default App;
