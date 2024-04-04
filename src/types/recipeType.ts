import { UserType } from "./User";

export type RecipeType = {
    User: UserType,
    title: String,
    ingredients: String[],
    steps: String,
    calories: Number,
    portion: Number,
    protein: Number,
    carbs: Number,
    fat: Number,
    images?: ImageData[],
}