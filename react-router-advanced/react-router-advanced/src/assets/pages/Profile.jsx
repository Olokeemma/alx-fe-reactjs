import { Outlet } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <ul>
          <li><a href="/profile/details">Details</a></li>
          <li><a href="/profile/settings">Settings</a></li>
        </ul>
      </nav>
      <Outlet /> {/* Nested routes will render here */}
    </div>
  );
};
export default Profile;
