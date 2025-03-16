// src/components/recipeStore.js

// Function to get recipes from localStorage
export const getRecipesFromStorage = () => {
    const recipes = localStorage.getItem('recipes');
    return recipes ? JSON.parse(recipes) : [];
  };
  
  // Function to save recipes to localStorage
  export const saveRecipesToStorage = (recipes) => {
    localStorage.setItem('recipes', JSON.stringify(recipes));
  };
  
  // Function to add a new recipe and save it to localStorage
  export const addRecipeToStorage = (newRecipe) => {
    const recipes = getRecipesFromStorage();
    recipes.push(newRecipe);
    saveRecipesToStorage(recipes);
  };

  