import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Resources from './pages/resources';
import Security from './pages/security';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Unauthorized from './pages/unauthorized';
import ProtectedRoute from './components/protectedroute';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Rotas protegidas com roles */}
        <Route 
          path="/resources" 
          element={
            <ProtectedRoute requiredRole="manager">
              <Resources />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/security" 
          element={
            <ProtectedRoute requiredRole="admin">
              <Security />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;
