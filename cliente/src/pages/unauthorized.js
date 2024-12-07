import React from 'react';

const Unauthorized = () => {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-red-600">Acesso Negado</h1>
      <p className="mt-4">Você não tem permissão para acessar esta página.</p>
    </div>
  );
};

export default Unauthorized;
