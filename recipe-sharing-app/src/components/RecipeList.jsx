// RecipeList.jsx
import React from 'react';

function RecipeList({ recipes }) {
  return (
    <ul>
      {recipes.map((recipe, index) => (
        <li key={index}>{recipe}</li>
      ))}
    </ul>
  );
}

export default RecipeList;
