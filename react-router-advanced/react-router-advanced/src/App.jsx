import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/*" element={<Profile />} /> {/* Nested Routes */}
      </Routes>
    </Router>
  );
}
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import Profile from './components/Profile';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/user/1">User 1 Profile</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/user/:userId" element={<UserProfile />} /> {/* Dynamic route */}
      </Routes>
    </Router>
  );
}
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);  // Simulate authentication state

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
              {isAuthenticated ? 'Logout' : 'Login'}
            </button>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <ProtectedRoute
          path="/profile/*"
          element={<Profile />}
          isAuthenticated={isAuthenticated}
        />
      </Routes>
    </Router>
  );
}




export default App;
