import { toast } from "react-toastify";
import { API } from "../app/common";
import { apiSlice } from "../reducers/apiSlice";
import { RecipeFormType, RecipeType } from "../types/recipeType";

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
    publishPost: build.mutation({
      transformErrorResponse: (response) => {
        toast.error(`Error getting posts data. Error: ${response.status}`);
        return response;
      },
      query: (postData: RecipeFormType) => ({
        url: `${API.BaseURL}/posts/new`,
        method: "POST",
        body: postData,
      }),
    }),
    like: build.mutation({
      transformErrorResponse: (response) => {
        toast.error(`Error getting posts data. Error: ${response.status}`);
        return response;
      },
      query: (postId: string) => ({
        url: `${API.BaseURL}/posts/${postId}/like`,
        method: "POST",
      }),
    }),
    dislike: build.mutation({
      transformErrorResponse: (response) => {
        toast.error(`Error getting posts data. Error: ${response.status}`);
        return response;
      },
      query: (postId: string) => ({
        url: `${API.BaseURL}/posts/${postId}/dislike`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetPostsQuery,
  useLikeMutation,
  useDislikeMutation,
  usePublishPostMutation,
} = extendedApiPostsSlice;
