import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Updated import for React Router v6
import { useRecipeStore } from './components/recipeStore';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  const { loadRecipes, recipes } = useRecipeStore();

  useEffect(() => {
    loadRecipes();  // Load recipes from localStorage when the app starts
  }, [loadRecipes]);

  return (
    <Router>
      <div className="App">
        <h1>Recipe Book</h1>

        <Routes>  {/* Updated from Switch to Routes */}
          {/* Route for viewing a single recipe's details */}
          <Route path="/recipe/:id" element={<RecipeDetails />} />

          {/* Route for adding a new recipe */}
          <Route path="/add" element={<AddRecipeForm />} />

          {/* Route for listing all recipes */}
          <Route path="/" element={<RecipeList recipes={recipes} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useRecipeStore } from './components/recipeStore';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';

function App() {
  const { loadRecipes, recipes } = useRecipeStore();

  useEffect(() => {
    loadRecipes();  // Load recipes from localStorage or server when app starts
  }, [loadRecipes]);

  return (
    <Router>
      <div className="App">
        <h1>Recipe Sharing App</h1>
        <SearchBar />  {/* The search bar component */}
        
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
