import { toast } from "react-toastify";
import { API } from "../app/common";
import { apiSlice } from "../reducers/apiSlice";
import { RecipeType } from "../types/recipeType";

export const extendedApiPostsSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
      transformResponse: (baseQueryReturnValue?: RecipeType[]): RecipeType[] =>
        baseQueryReturnValue ?? [],
      transformErrorResponse: (response) => {
        toast.error(`Error getting posts data. Error: ${response.status}`);
        return response;
      },
      query: (user: Number) => `${API.BaseURL}/posts/${user}`,
    }),
  }),
});

export const { useGetPostsQuery } = extendedApiPostsSlice;
