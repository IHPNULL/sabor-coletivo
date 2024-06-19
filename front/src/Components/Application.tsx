import { createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAppSelector } from "../hooks/AppStoreHooks";
import { selectUserProfile } from "../reducers/userProfileSlice";
import { extendedApiLoginSlice } from "../services/loginService";
import { Header } from "./Header/header";
import { PostsContainer } from "./PostsContainer/PostsContainer";
import { AppContextType } from "../types/AppcontextType";

const App = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.backgroundColor};
`;

export const ApplicationContext = createContext<AppContextType>({
  user: {
    name: "defaultUser",
    profilePic: "",
    followers: [],
    following: [],
  },
});

export const Application = () => {
  const user = useAppSelector(selectUserProfile);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt-token");
    if (!token) {
      localStorage.clear();
      navigate("/login");
    }
  });

  const { data: _user } = extendedApiLoginSlice.useGetUserDataQuery(
    localStorage.getItem("userCode") ?? "",
    { skip: !localStorage.getItem("userCode") || Boolean(user.userCode) }
  );

  return (
    <App>
      <ApplicationContext.Provider value={{ user: _user }}>
        <Header />
        <PostsContainer />
      </ApplicationContext.Provider>
    </App>
  );
};
