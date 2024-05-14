import React from 'react';
import { Link } from 'react-router-dom';

function EntityList({ entities }) {
  return (
    <div>
      <h2>Entity List</h2>
      <ul>
        {entities.map((entity) => (
          <li key={entity.id}>
            <Link to={`/entity/${entity.id}`}>{entity.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EntityList;