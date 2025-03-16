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


