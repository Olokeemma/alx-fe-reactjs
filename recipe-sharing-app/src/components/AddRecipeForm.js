// AddRecipeForm.jsx
import React, { useState } from 'react';

function AddRecipeForm({ onAddRecipe }) {
  const [recipe, setRecipe] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (recipe) {
      onAddRecipe(recipe);  // Pass the new recipe to the parent component
      setRecipe(""); // Reset form
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={recipe}
        onChange={(e) => setRecipe(e.target.value)}
        placeholder="Enter a new recipe"
      />
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;
