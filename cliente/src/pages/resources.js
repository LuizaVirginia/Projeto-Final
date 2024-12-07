import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resources = () => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const fetchResources = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/resources');
        setResources(res.data);
      } catch (err) {
        console.error('Erro ao buscar recursos:', err);
      }
    };

    fetchResources();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Recursos</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource._id} className="border p-4 mb-2 rounded">
            <h3 className="text-xl">{resource.name}</h3>
            <p>Tipo: {resource.type}</p>
            <p>Status: {resource.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
