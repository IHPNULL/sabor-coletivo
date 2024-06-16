import axios from "axios";
import { UserAuthType, UserType } from "../types/User";

interface signupType extends UserType {
  senha: String;
  email: String;
}

export const LoginServices = () => {
  const Login = (user: UserAuthType) =>
    axios.post("http://localhost:8080/login", user);

  const SignUp = (user: signupType) =>
    axios.post("http://localhost:8080/signup", user);

  return { Login, SignUp };
};
