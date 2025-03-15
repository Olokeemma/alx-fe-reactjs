import create from 'zustand';

// Zustand store for managing recipes
export const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
}));
import create from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  
  // Action to add a recipe
  addRecipe: (newRecipe) => set(state => ({
    recipes: [...state.recipes, newRecipe]
  })),
  
  // Action to delete a recipe by id
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  
  // Action to update a recipe by id
  updateRecipe: (id, updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    )
  })),
  
  setRecipes: (recipes) => set({ recipes }),
}));

