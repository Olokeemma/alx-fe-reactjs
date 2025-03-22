import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation
import data from '../data.json'; // Import the mock data

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  // Simulate fetching recipe data from an API or local file
  useEffect(() => {
    setRecipes(data); // Set the mock data to state (in a real app, you'd fetch this data)
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-semibold text-center mb-8">Recipe Collection</h1>
      
      {/* Recipe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            {/* Link to Recipe Detail Page */}
            <Link to={`/recipe/${recipe.id}`} className="block">
              {/* Recipe Image */}
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              {/* Recipe Title */}
              <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
              {/* Recipe Summary */}
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
