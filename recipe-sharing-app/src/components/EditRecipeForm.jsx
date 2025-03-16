import React, { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const { updateRecipe } = useRecipeStore();
  const [title, setTitle] = useState(recipe.title);
  const [content, setContent] = useState(recipe.content);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior
    updateRecipe(recipe.id, { title, content });  // Update the recipe in the Zustand store
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;

