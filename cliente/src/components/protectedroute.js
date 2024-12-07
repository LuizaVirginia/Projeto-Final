import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/authcontext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Redireciona para login se não estiver autenticado
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.role !== requiredRole) {
    // Redireciona para a página de erro se o usuário não tiver permissão
    return <Navigate to="/unauthorized" />;
  }

  return children;
};

export default ProtectedRoute;

