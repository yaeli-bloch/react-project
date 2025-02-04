import { Box, Container, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AppDispatch } from "../recipesStore";
import { useDispatch } from "react-redux";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { fetchAddRecipe } from "../recipesSlice";
import { UserContext } from "./HomePage";
import InputField from './InputField';
import SubmitButton from './SubmitButton';

const schema = object({
  title: string().required(),
  description: string().required(),
  ingredients: string().required(),
  instructions: string().required(),
  products: string().required(),
}).required();

const AddRecipe = () => {
  const dispatchFetch = useDispatch<AppDispatch>();
  const context = useContext(UserContext);
  const Id = context?.user.id;
  const { formState: { errors }, register, handleSubmit, reset } = useForm({ resolver: yupResolver(schema) });
  const [open, setOpen] = useState(false);

  const onSubmit = async (data: any) => {
    console.log("Try to submit", data);
    setOpen(false);
    const ingredientsArray = data.ingredients.split(',').map((ingredient: string) => ingredient.trim());
    const recipe = {
      title: data.title,
      description: data.description,
      ingredients: ingredientsArray,
      instructions: data.instructions,
      id: Date.now(),
      authorId: Number(Id) | 0,
    };
    dispatchFetch(fetchAddRecipe({ recipe, userId: Number(Id) }));
    reset();
    setOpen(false);
  };
  return (
    <Container maxWidth="xs" sx={{ marginTop: 10 }}>
      <Box
        sx={{
          backgroundColor: '#000000',
          padding: 3,
          borderRadius: 3,
          boxShadow: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100%',
          maxWidth: 300,
          margin: 'auto',
        }}
      >
        <Typography variant="h5" align="center" sx={{ color: '#40E0D0', marginBottom: 3 }}>
          Add New Recipe
        </Typography>
        {open && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              label="Title"
              placeholder="Enter title"
              register={register("title")}
              error={!!errors.title}
              helperText={errors.title?.message}
            />
            <InputField
              label="Description"
              placeholder="Enter description"
              register={register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
            />
            <InputField
              label="Ingredients (separate by commas)"
              placeholder="Enter ingredients"
              register={register("ingredients")}
              error={!!errors.ingredients}
              helperText={errors.ingredients?.message}
            />
            <InputField
              label="Instructions"
              placeholder="Enter instructions"
              register={register("instructions")}
              error={!!errors.instructions}
              helperText={errors.instructions?.message}
            />
            <InputField
              label="Products"
              placeholder="Enter products"
              register={register("products")}
              error={!!errors.products}
              helperText={errors.products?.message}
            />
            <SubmitButton type="submit" />
          </form>
        )}

        {!open && (
          <SubmitButton
            type="button"
            onClick={() => setOpen(true)}
          />
        )}
      </Box>
    </Container>
  );
};
export default AddRecipe;
