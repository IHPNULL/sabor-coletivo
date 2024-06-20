import { UserType } from "./User";

export type RecipeFormType = {
  user: number;
  title: string;
  ingredients: string[];
  steps: string[];
  calories: Number;
  portion: Number;
  protein: Number;
  carbs: Number;
  fat: Number;
  images?: ImageData[];
};

export type RecipeType = {
  _id: string;
  likes: number;
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
