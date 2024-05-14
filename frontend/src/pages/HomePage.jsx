import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EntityList from '../components/EntityList';
import ApiService from '../services/ApiService';

function HomePage() {
  const [entities, setEntities] = useState([]);

  useEffect(() => {
    fetchEntities();
  }, []);

  const fetchEntities = async () => {
    try {
      const data = await ApiService.getEntities();
      setEntities(data);
    } catch (error) {
      console.error('Error fetching entities:', error);
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/create-entity">Create New Entity</Link>
      <EntityList entities={entities} />
    </div>
  );
}

export default HomePage;