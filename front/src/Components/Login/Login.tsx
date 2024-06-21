import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Link,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useLogin } from "../../hooks/loginHook";

const FormTextBox = styled(TextField)`
  background-color: white;
`;

export const Login = () => {
  const { login } = useLogin();

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    login({
      email: data.get("email")?.toString() ?? ``,
      senha: data.get("senha")?.toString() ?? ``,
    })
      .then(() => navigate("/home"))
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
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
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
            name="senha"
            label="senha"
            type="password"
            id="senha"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="default" />}
            label="Remember me"
          />
          <Stack direction="row" justifyContent="space-between">
            <Link href="/signup" variant="body2">
              <Button
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2 }}
              >
                Back
              </Button>
            </Link>
            <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign In
            </Button>
          </Stack>
        </Box>
      </Box>
    </Container>
  );
};
