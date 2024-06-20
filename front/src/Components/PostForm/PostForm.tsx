import {
  Box,
  Button,
  Container,
  Stack,
  styled,
  TextField,
} from "@mui/material";
import * as React from "react";
import { usePost } from "../../hooks/postHooks";
import { RecipeFormType } from "../../types/recipeType";
import { PageTitle } from "../Header/styledHeader";

const FormTextBox = styled(TextField)`
  background-color: white;
`;

export const PostForm = () => {
  const { publish } = usePost();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const postData: RecipeFormType = {
      title: data.get("title")?.toString() ?? "",
      ingredients: data.get("ingredients")?.toString().split("\n") ?? [],
      steps: data.get("steps")?.toString().split("\n") ?? [],
      calories: Number(data.get("calories")?.toString()) ?? 0,
      portion: Number(data.get("portion")?.toString()) ?? 0,
      protein: Number(data.get("protein")?.toString()) ?? 0,
      carbs: Number(data.get("carbs")?.toString()) ?? 0,
      fat: Number(data.get("fat")?.toString()) ?? 0,
      user: 0,
    };
    publish(postData);
  };

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <PageTitle>Qual delicia vamos compartilhar hoje?</PageTitle>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <FormTextBox
            size="small"
            margin="normal"
            required
            fullWidth
            id="title"
            label="Titulo"
            name="title"
            autoFocus
          />
          <FormTextBox
            size="small"
            margin="normal"
            required
            fullWidth
            name="ingredients"
            label="ingredientes"
            id="ingredients"
            multiline
          />
          <FormTextBox
            size="small"
            margin="normal"
            required
            fullWidth
            name="steps"
            label="Modo de preparo"
            id="steps"
            multiline
          />
          <Stack alignItems="end">
            <Button type="submit" variant="contained">
              Publicar
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
