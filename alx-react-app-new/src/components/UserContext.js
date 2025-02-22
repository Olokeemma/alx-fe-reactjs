// src/UserContext.js
import React from 'react';

// Create the context for user data
const UserContext = React.createContext();

export default UserContext;
// src/UserDetails.jsx
import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  // Consume the user data from context
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;

