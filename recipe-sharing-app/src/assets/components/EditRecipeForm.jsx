import { useState, useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import { useNavigate, useParams } from 'react-router-dom';

const EditRecipeForm = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === Number(recipeId))
  );
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (recipe) {
      updateRecipe(recipe.id, { title, description });
      navigate(`/recipe/${recipe.id}`);
    }
  };

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;
