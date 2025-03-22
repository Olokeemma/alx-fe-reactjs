import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Router and Routes
import HomePage from './components/HomePage'; // Import HomePage component
import RecipeDetail from './components/RecipeDetail'; // Import RecipeDetail component

function App() {
  return (
    <Router>
      <div className="text-blue-500">
        <h1 className="text-center text-4xl font-bold my-8">Welcome to the Recipe Sharing Platform</h1>
        
        {/* Set up routes */}
        <Routes>
          <Route path="/" element={<HomePage />} /> {/* HomePage route */}
          <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* RecipeDetail route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
