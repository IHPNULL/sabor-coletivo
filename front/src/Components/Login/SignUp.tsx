import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { LoginServices } from "../../services/loginService";

const FormTextBox = styled(TextField)`
  background-color: white;
`;

export const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    LoginServices()
      .SignUp({
        email: data.get("email")?.toString() ?? ``,
        name: data.get("name")?.toString() ?? ``,
        senha: data.get("senha")?.toString() ?? ``,
        followers: [],
        following: [],
        profilePic: "",
      })
      .then(() => {
        navigate("/home");
      })
      .catch((err) => {
        toast.error(err.response.data.mensagem);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack direction="row" alignItems="center">
          <Stack alignItems="center">
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign Up
            </Typography>
          </Stack>
        </Stack>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <FormTextBox
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
          />
          <FormTextBox
            margin="normal"
            required
            fullWidth
            id="name"
            label="nome"
            name="name"
            autoFocus
          />
          <FormTextBox
            margin="normal"
            required
            fullWidth
            name="senha"
            label="senha"
            type="password"
            id="senha"
          />
          <Stack direction="row" justifyContent="space-between">
            <Link to="/home">
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >
                Back
              </Button>
            </Link>
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
