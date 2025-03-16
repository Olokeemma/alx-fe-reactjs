// src/components/UserProfile.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { userId } = useParams();  // Access dynamic parameter from the URL

  return <h2>User Profile for User {userId}</h2>;
};

export default UserProfile;
