import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/authcontext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resources">Recursos</Link></li>
        <li><Link to="/security">Segurança</Link></li>
        {user ? (
          <>
            <li>Bem-vindo!</li>
            <li>
              <button onClick={logout} className="text-red-500">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Registrar</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

