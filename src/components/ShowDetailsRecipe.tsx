import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../recipesStore";
import { Box, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";

const ShowDetailsRecipe=()=>{ 
     const {id} =useParams();//זה לא שולף לי טוב 
     const {recipes} = useSelector((state: RootState) => state.recipes);    
    const recipe = recipes.find(r=>r.id==Number(id));    
    if (!recipe) {
        return (
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <Typography variant="h6" color="error">
              Recipe not found.
            </Typography>
          </Box>
        );
      }    
      return (
        <Paper
          sx={{
            padding: 3,
            borderRadius: 2,
            border: '2px solid turquoise',
            maxWidth: 600,
            margin: 'auto',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >         
          <Typography variant="h4" gutterBottom sx={{ color: 'turquoise', fontWeight: 'bold' }}>
            {recipe.title}
          </Typography> 

          <Typography variant="h6" gutterBottom sx={{ fontStyle: 'italic', color: 'gray' }}>
            {recipe.description}
          </Typography>

          <Typography variant="h6" sx={{ color: 'turquoise', marginBottom: 2 }}>
            Ingredients:
          </Typography>

          <List sx={{ marginBottom: 3 }}>
            {recipe.ingredients.map((ingredient, index) => (
              <ListItem key={index}>
                <ListItemText primary={ingredient} />
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" sx={{ color: 'turquoise', marginBottom: 2 }}>
            Instructions:
          </Typography>
          <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
            {recipe.instructions}
          </Typography>
        </Paper>
      );
}
export default ShowDetailsRecipe;