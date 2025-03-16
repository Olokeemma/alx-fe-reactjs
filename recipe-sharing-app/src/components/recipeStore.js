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
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],  // This will store all the recipes
  searchTerm: '',  // The term users enter in the search bar
  setSearchTerm: (term) => set({ searchTerm: term }),  // Action to update the search term
  filteredRecipes: [],  // Stores recipes that match the search term
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(state.searchTerm.toLowerCase())
      ) ||
      recipe.preparationTime.toString().includes(state.searchTerm)
    )
  })),
}));

export default useRecipeStore;
import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],  // Stores all the recipes
  favorites: [],  // Stores the user's favorite recipe IDs
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],  // Stores personalized recipe recommendations
  generateRecommendations: () => set(state => {
    // Example recommendation logic: Recommend recipes similar to favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;


  
  