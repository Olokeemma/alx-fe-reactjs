// Importing necessary React and component files
import React, { useState } from "react";

// Import AddRecipeForm and RecipeList components
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';

function App() {
  const [recipes, setRecipes] = useState([]);

  // Function to handle adding new recipes
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  return (
    <div className="App">
      <h1>Recipe Book</h1>

      {/* Rendering the AddRecipeForm component and passing addRecipe as a prop */}
      <AddRecipeForm onAddRecipe={addRecipe} />

      {/* Rendering the RecipeList component and passing recipes as a prop */}
      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

        <Switch>
          <Route path="/recipe/:id">
            {({ match }) => {
              const recipeId = parseInt(match.params.id, 10);
              return <RecipeDetails recipeId={recipeId} />;
            }}
          </Route>
          <Route path="/add">
            <AddRecipeForm />
          </Route>
          <Route path="/">
            <RecipeList recipes={recipes} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

