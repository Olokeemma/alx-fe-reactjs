import { useState, useEffect } from 'react';
import data from '../data.json'; // Import the mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Simulate data fetching using useEffect
  useEffect(() => {
    setRecipes(data); // In a real app, you'd fetch this data from an API
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold text-center mb-8">Recipe Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img
              className="w-full h-48 object-cover"
              src={recipe.image}
              alt={recipe.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
              <a
                href={`/recipes/${recipe.id}`}
                className="text-blue-500 mt-4 inline-block hover:text-blue-700"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
