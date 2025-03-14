import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { userId } = useParams();
  return <div>Profile of user with ID: {userId}</div>;
};

export default UserProfile;

