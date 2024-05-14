import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ApiService from '../services/ApiService';

function CreateEntityPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
  });
  const history = useHistory();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await ApiService.createEntity(formData);
      history.push('/');
    } catch (error) {
      console.error('Error creating entity:', error);
    }
  };

  return (
    <div>
      <h1>Create Entity Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="mobileNumber"
          placeholder="Mobile Number"
          value={formData.mobileNumber}
          onChange={handleChange}
        />
        <input
          type="date"
          name="dateOfBirth"
          placeholder="Date of Birth"
          value={formData.dateOfBirth}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateEntityPage;