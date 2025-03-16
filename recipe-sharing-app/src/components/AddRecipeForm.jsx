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
import React, { useState } from 'react';

function AddRecipeForm({ addRecipe }) {
  // Local state to store the title and recipe content
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (title && content) {
      // Create a new recipe object
      const newRecipe = { title, content };
      addRecipe(newRecipe); // Pass the new recipe to the parent function
      setTitle(''); // Reset title field
      setContent(''); // Reset content field
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Enter recipe title" 
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          placeholder="Enter recipe content" 
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
}

export default AddRecipeForm;

