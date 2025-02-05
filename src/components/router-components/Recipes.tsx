import { useEffect, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipes } from '../../store/recipesSlice';
import { Box, CircularProgress, Typography, Button } from '@mui/material';
import { RootState, AppDispatch } from '../../store/recipesStore';
import { Recipe } from './Recipe';
import { Outlet, useNavigate } from 'react-router';
const Recipes = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { recipes, loading, error } = useSelector((state: RootState) => state.recipes);
  const navigate = useNavigate();
  let count = 0;
  const handleUpdate = (recipe: Recipe) => {     
    navigate(`${recipe.id}`);
    console.log("select one recipe");
  }
  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (<>
    <Box
      sx={{
        position: 'absolute',
        top: '50px',
        right: '0',
        width: '300px',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '16px',
        borderRadius: '8px',
      }}
    >
      {recipes.map((recipe: Recipe) => (
        <Button
          key={count++}
          variant="text"
          sx={{
            color: 'turquoise',
            marginBottom: '10px',
            fontSize: '18px',
            fontWeight: 'bold',
            textAlign: 'left',
            width: '100%',
          }}
          onClick={() => {
            handleUpdate(recipe)
          }}
        >
          {recipe.title}
        </Button>
      ))}
    </Box>
   <Outlet/>
  </>
  );
}

export default Recipes