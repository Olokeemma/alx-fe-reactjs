import React from 'react';

const UserProfile = () => {
  return (
    <div className="p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <div className="flex justify-center mb-4">
      <div className="p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-sm md:max-w-lg mx-auto bg-white shadow-md rounded-lg">

        {/* Profile Image */}
        <img
          src="https://via.placeholder.com/150"
          alt="User Avatar"
          className="w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full"
        />
      </div>
      <div className="text-center">
        {/* User Name */}
        <h1 className="text-lg sm:text-lg md:text-xl font-bold">John Doe</h1>
        {/* User Bio */}
        <p className="text-sm sm:text-sm md:text-base text-gray-600 mt-2">
          Software developer passionate about building web applications.
        </p>
      </div>
    </div>
  );
};

export default UserProfile;

