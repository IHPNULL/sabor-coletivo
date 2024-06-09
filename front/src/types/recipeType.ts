import { UserType } from "./User";

export type RecipeType = {
  user: UserType;
  title: String;
  ingredients: String[];
  steps: String;
  calories: Number;
  portion: Number;
  protein: Number;
  carbs: Number;
  fat: Number;
  images?: ImageData[];
};
