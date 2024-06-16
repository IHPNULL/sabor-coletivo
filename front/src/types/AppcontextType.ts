import { UserType } from "./User";
import { RecipeType } from "./recipeType";

export type AppContextType = {
  user?: UserType;
  posts: RecipeType[];
  setUserByContext: (user?: UserType) => void;
  setPostsByContext: (posts?: RecipeType[]) => void;
};
