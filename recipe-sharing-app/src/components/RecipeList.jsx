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
import React from 'react';
import { useRecipeStore } from './recipeStore';  // Make sure this is the correct path to your Zustand store

function RecipeList() {
  // Access recipes from the Zustand store
  const { recipes } = useRecipeStore();

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes available. Add some!</p>
      ) : (
        <ul>
          {recipes.map((recipe, index) => (
            <li key={index}>
              <h3>{recipe.title}</h3>
              <p>{recipe.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default RecipeList;
import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes available. Add some!</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.content}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;

import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import RecipeItem from './RecipeItem';  // Assuming you have a RecipeItem component

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const recipes = useRecipeStore(state => state.recipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  // Ensure the list is filtered when recipes change
  useEffect(() => {
    filterRecipes();
  }, [recipes, filterRecipes]);

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found</p>
      ) : (
        filteredRecipes.map(recipe => (
          <RecipeItem key={recipe.id} recipe={recipe} />
        ))
      )}
    </div>
  );
};

export default RecipeList;

