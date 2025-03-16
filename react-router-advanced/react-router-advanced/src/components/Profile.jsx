// src/components/Profile.jsx
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

const ProfileDetails = () => <h3>Profile Details</h3>;
const ProfileSettings = () => <h3>Profile Settings</h3>;

const Profile = () => (
  <div>
    <h2>Profile Page</h2>
    <nav>
      <ul>
        <li>
          <Link to="details">Profile Details</Link>
        </li>
        <li>
          <Link to="settings">Profile Settings</Link>
        </li>
      </ul>
    </nav>

    <Routes>
      <Route path="details" element={<ProfileDetails />} />
      <Route path="settings" element={<ProfileSettings />} />
    </Routes>
  </div>
);

export default Profile;
