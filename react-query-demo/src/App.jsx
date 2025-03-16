import UserProfile from './components/UserProfile';

// Inside Routes
<Route path="/user/:id" element={<UserProfile />} />
import PrivateRoute from './components/PrivateRoute';

const isAuthenticated = false; // Change this flag for testing purposes

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/profile" element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
            <Route path="*" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

