import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import ApiService from '../services/ApiService';

function EntityDetailsPage() {
  const { id } = useParams();
  const [entity, setEntity] = React.useState(null);
  const history = useHistory();

  React.useEffect(() => {
    fetchEntityDetails();
  }, []);

  const fetchEntityDetails = async () => {
    try {
      const data = await ApiService.getEntityById(id);
      setEntity(data);
    } catch (error) {
      console.error('Error fetching entity details:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await ApiService.deleteEntity(id);
      history.push('/');
    } catch (error) {
      console.error('Error deleting entity:', error);
    }
  };

  return (
    <div>
      <h1>Entity Details Page</h1>
      {entity && (
        <div>
          <p>Name: {entity.name}</p>
          <p>Email: {entity.email}</p>
          <p>Mobile Number: {entity.mobileNumber}</p>
          <p>Date of Birth: {entity.dateOfBirth}</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default EntityDetailsPage;