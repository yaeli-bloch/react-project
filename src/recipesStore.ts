import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipesSlice';
const recipesStore = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
export type RootState = ReturnType<typeof recipesStore.getState>;  
export type AppDispatch = typeof recipesStore.dispatch;  
export default recipesStore;