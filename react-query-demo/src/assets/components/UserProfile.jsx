import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams(); // Retrieve the dynamic 'id' param from the URL
  return <h1>User Profile for {id}</h1>;
};

export default UserProfile;
