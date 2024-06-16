import { ThemeProvider } from "styled-components";

import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Theme } from "../Theme";
import { AppContextType } from "../types/AppcontextType";
import { UserType } from "../types/User";
import { RecipeType } from "../types/recipeType";
import { Router } from "./Router";

export const appContext = createContext<AppContextType>({
  posts: [],
  setUserByContext: () => {},
  setPostsByContext: () => {},
});

function Main() {
  const [posts, setPosts] = useState<RecipeType[]>([]);
  const [user, setUser] = useState<UserType>();

  const setUserByContext = (user?: UserType) => (user ? setUser(user) : null);
  const setPostsByContext = (posts?: RecipeType[]) =>
    posts ? setPosts(posts) : null;

  return (
    <ThemeProvider theme={Theme}>
      <appContext.Provider
        value={{ posts, user, setUserByContext, setPostsByContext }}
      >
        <ToastContainer />
        <Router />
      </appContext.Provider>
    </ThemeProvider>
  );
}

export default Main;
