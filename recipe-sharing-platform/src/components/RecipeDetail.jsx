import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../data.json'; // Import mock data

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe data based on the ID
    const selectedRecipe = data.find((recipe) => recipe.id.toString() === id);
    setRecipe(selectedRecipe); // Set the recipe details to state
  }, [id]);

  // Display loading state if recipe is not loaded yet
  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-4xl font-bold text-gray-800">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mt-4"
        />
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Ingredients</h2>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold text-gray-700">Cooking Instructions</h2>
          <ol className="list-decimal pl-6 mt-2 text-gray-600">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;

<div className="container mx-auto p-4">
  <div className="bg-white rounded-lg shadow-lg p-6">
    <h1 className="text-4xl font-bold text-gray-800">{recipe.title}</h1>
    <img
      src={recipe.image}
      alt={recipe.title}
      className="w-full h-64 object-cover rounded-lg mt-4"
    />
    <div className="mt-6">
      <h2 className="text-2xl font-semibold text-gray-700">Ingredients</h2>
      <ul className="list-disc pl-6 mt-2 text-gray-600">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
    <div className="mt-6">
      <h2 className="text-2xl font-semibold text-gray-700">Cooking Instructions</h2>
      <ol className="list-decimal pl-6 mt-2 text-gray-600">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </div>
  </div>
</div>
