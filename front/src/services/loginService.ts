import axios from "axios";
import { UserAuthType, UserType } from "../types/User";
import { apiSlice } from "../reducers/apiSlice";
import { API } from "../app/common";

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

export const extendedApiLoginSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getLogin: build.mutation({
      query: (userToLogin) => ({
        url: `${API.BaseURL}/login`,
        method: `POST`,
        body: userToLogin,
      }),
    }),
    signup: build.mutation({
      query: (userToSignup: signupType) => ({
        url: `${API.BaseURL}/signup`,
        method: `POST`,
        body: userToSignup,
      }),
    }),
    getUserData: build.query({
      transformResponse: (baseQueryReturnValue: UserType): UserType =>
        baseQueryReturnValue,
      query: (userToLogin: string) => ({
        url: `${API.BaseURL}/user/${userToLogin}`,
      }),
    }),
  }),
});

export const { useGetLoginMutation, useGetUserDataQuery, useSignupMutation } =
  extendedApiLoginSlice;
