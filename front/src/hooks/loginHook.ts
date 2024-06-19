import { setUserProfile } from "../reducers/userProfileSlice";
import { extendedApiLoginSlice } from "../services/loginService";
import { UserType } from "../types/User";

export type SubmitLoginFunction = (arg: {
  email: string;
  senha: string;
}) => Promise<UserType | never>;

export type SubmitReLoginFunction = (userCode: string) => void;

export const useLogin = () => {
  const [mutate, loginResult] = extendedApiLoginSlice.useGetLoginMutation();

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

  return {
    loginResult,
    login,
  };
};
