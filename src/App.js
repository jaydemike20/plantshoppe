import logo from './logo.svg';
import './App.css';
import Login from './pages/Login/login';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UseSelector } from 'react-redux';
import Home from './pages/Home/home';
import Welcome from './pages/Welcome/welcome';
import Plants from './pages/plants/plants';
import About from './pages/About/about'
import Contact from './pages/Contact/contact'


function App() {
  const isAuthenticated = useSelector((state) => state.auth.isLoggedIn);

  return (
    <div className="container">
      <Routes>
        {/* <Route path="/" element={isAuthenticated ? <Navigate to="/" replace /> : <Welcome />} />
        <Route path="/plants" element={isAuthenticated ? <Plants /> : <Navigate to="/" replace />} />
        <Route path="/about" element={isAuthenticated ? <About /> : <Navigate to="/" replace />} />
        <Route path="/contact" element={isAuthenticated ? <Contact /> : <Navigate to="/" replace />} /> */}

        <Route path="/" element={<Welcome />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/about" element={<About />} />        
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Login />} />
        <Route path="/login" element={isAuthenticated ? <Navigate to="/Home" replace /> : <Login />} />
        <Route path="/home" element={isAuthenticated ? <Home /> : <Navigate to="/" replace />} />

      </Routes>
    </div>
  );
}

export default App;
