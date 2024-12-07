import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const userData = res.data;
      setUser(userData);
      localStorage.setItem('token', userData.token);
    } catch (err) {
      console.error('Erro no login:', err);
      throw err;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  // Validar o token ao carregar a página
  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const res = await axios.get('http://localhost:5000/api/auth/validate', {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(res.data); // Dados do usuário (incluindo role)
        } catch (err) {
          console.error('Token inválido ou expirado:', err);
          logout();
        }
      }
    };

    validateToken();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
