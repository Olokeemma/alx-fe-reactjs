import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;

      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
    
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
import React from 'react';
import UserProfile from './components/UserProfile';

const App = () => {
  return (
    <div>
      <h1>Welcome to the User Profile App</h1>
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
    </div>
  );
};

export default App;
// src/App.jsx
import React from 'react';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <h1>React Counter App</h1>
      <Counter />
    </div>
  );
}

export default App;
