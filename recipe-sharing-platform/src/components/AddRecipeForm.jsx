import { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [errors, setErrors] = useState({});

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Basic validation checks
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required';
    if (!instructions) newErrors.instructions = 'Instructions are required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Assuming you are handling the form submission to an API or state management
    // Here you would call the function to add the new recipe to your state or backend
    console.log('New recipe added:', { title, ingredients, instructions });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Add a New Recipe</h1>

        <form onSubmit={handleSubmit}>
          {/* Title Field */}
          <div className="mb-4">
            <label htmlFor="title" className="block text-lg font-semibold text-gray-700">
              Recipe Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter recipe title"
            />
            {errors.title && <p className="text-red-500 text-sm mt-2">{errors.title}</p>}
          </div>

          {/* Ingredients Field */}
          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-lg font-semibold text-gray-700">
              Ingredients
            </label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter ingredients (separate with commas)"
              rows="4"
            />
            {errors.ingredients && <p className="text-red-500 text-sm mt-2">{errors.ingredients}</p>}
          </div>

          {/* Instructions Field */}
          <div className="mb-4">
            <label htmlFor="instructions" className="block text-lg font-semibold text-gray-700">
              Cooking Instructions
            </label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="mt-2 p-3 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter cooking instructions"
              rows="6"
            />
            {errors.instructions && <p className="text-red-500 text-sm mt-2">{errors.instructions}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipeForm;
