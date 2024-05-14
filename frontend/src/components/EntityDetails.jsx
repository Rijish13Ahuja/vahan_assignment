import React from 'react';

function EntityDetails({ entity }) {
  return (
    <div>
      <h2>Entity Details</h2>
      <p><strong>Name:</strong> {entity.name}</p>
      <p><strong>Description:</strong> {entity.description}</p>
    </div>
  );
}

export default EntityDetails;
