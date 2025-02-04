import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Recipe } from './components/router-components/Recipe';
export const fetchRecipes = createAsyncThunk('recipes/fetchRecipes', async (_,thunkAPI) => {
    try{
  const response = await fetch('http://localhost:3000/api/recipes'); 
  const data = await response.json();
  return data as Recipe[];
}
catch(error){
   return thunkAPI.rejectWithValue(error);
}
});
export const fetchAddRecipe = createAsyncThunk(
  'recipes/fetchAddRecipe',
  async ({ recipe, userId }: { recipe: Recipe, userId: number }, thunkAPI) => {
    try {
      const response = await fetch('http://localhost:3000/api/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "user-id": String(userId),
        },
        body: JSON.stringify(recipe), 
      });
      const data = await response.json();
      console.log("Fetched recipes:", JSON.stringify(data, null, 2));      
      return data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}
const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: null,
};
const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch recipes';
      });
      builder
      .addCase(fetchAddRecipe.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAddRecipe.fulfilled, (state, action) => {
        state.loading = false;
        state.recipes.push(action.payload.recipe); 
      })
      .addCase(fetchAddRecipe.rejected, (state, action) => {        
        state.loading = false;
        state.error = action.error.message || 'Failed to add recipe';
      });
  },
});
export default recipesSlice.reducer;

