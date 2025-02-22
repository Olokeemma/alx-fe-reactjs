
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';
import { useState } from 'react';

const App = () => {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    
    <>

<UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
};

export default App;


