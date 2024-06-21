import { useNavigate } from "react-router-dom";
import { setUserProfile } from "../reducers/userProfileSlice";
import { extendedApiLoginSlice } from "../services/loginService";
import { UserType } from "../types/User";

export type SubmitLoginFunction = (arg: {
  email: string;
  senha: string;
}) => Promise<UserType | never>;

interface signupType extends UserType {
  senha: String;
  name: String;
  email: String;
}

export type SubmitReLoginFunction = (userCode: string) => void;
export type SubmitNewUserFunction = (user: signupType) => void;

export const useLogin = () => {
  const [mutate, loginResult] = extendedApiLoginSlice.useGetLoginMutation();
  const [signupMutate] = extendedApiLoginSlice.useSignupMutation();
  const navigate = useNavigate();

  const login: SubmitLoginFunction = async ({ email, senha }) => {
    try {
      return await mutate({ email, senha })
        .unwrap()
        .then((resp) => {
          localStorage.setItem("jwt-token", resp.token);
          localStorage.setItem("userCode", resp.userCode);
          setUserProfile(resp);
          return resp;
        });
    } catch (err: any) {
      console.error("Notifications not saved.");
      throw err;
    }
  };

  const SignUp: SubmitNewUserFunction = async (newUser) => {
    try {
      return await signupMutate(newUser)
        .unwrap()
        .then((resp) => {
          localStorage.setItem("jwt-token", resp.token);
          localStorage.setItem("userCode", resp.userCode);
          setUserProfile(resp);
          navigate("/home");

          return resp;
        });
    } catch (err: any) {
      console.error("Notifications not saved.");
      throw err;
    }
  };

  return {
    loginResult,
    login,
    SignUp,
  };
};
