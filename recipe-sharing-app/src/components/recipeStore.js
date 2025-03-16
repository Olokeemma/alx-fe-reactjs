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
  import create from 'zustand';

  // Create the Zustand store
  export const useRecipeStore = create((set) => ({
    recipes: [], // Initially, no recipes in the store
  
    // Function to set recipes
    setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  
    // Function to add a new recipe
    addRecipe: (newRecipe) => set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),
  
    // Function to load recipes from local storage
    loadRecipes: () => {
      const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
      set({ recipes: savedRecipes });
    },
  
    // Function to save recipes to local storage
    saveRecipes: () => {
      localStorage.setItem('recipes', JSON.stringify(get().recipes));
    },
  }));
  import create from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],

  // Add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] // Assign a unique ID based on timestamp
  })),

  // Delete a recipe by ID
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),

  // Update an existing recipe by ID
  updateRecipe: (id, updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((recipe) =>
      recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
    ),
  })),
  
  // Load recipes from local storage
  loadRecipes: () => {
    const savedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    set({ recipes: savedRecipes });
  },

  // Save recipes to local storage
  saveRecipes: () => {
    localStorage.setItem('recipes', JSON.stringify(get().recipes));
  },
}));

  
  