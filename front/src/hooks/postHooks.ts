import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { extendedApiPostsSlice } from "../services/postsService";
import { RecipeFormType } from "../types/recipeType";

export type LikePostFunction = (postCode: string) => void;
export type PublishPostFunction = (postData: RecipeFormType) => void;

export const usePost = () => {
  const navigate = useNavigate();

  const [mutate, likeResult] = extendedApiPostsSlice.useLikeMutation();
  const [dislike, disLikeResult] = extendedApiPostsSlice.useDislikeMutation();
  const [puclishRecipe, puclishRecipeResult] =
    extendedApiPostsSlice.usePublishPostMutation();

  const publish: PublishPostFunction = async (postData) => {
    try {
      return await puclishRecipe(postData)
        .unwrap()
        .then((resp) => {
          toast.success("Publicado");
          navigate("/home");
          return resp;
        });
    } catch (err: any) {
      console.error("Notifications not saved.");
      throw err;
    }
  };
  const Like: LikePostFunction = async (postCode) => {
    try {
      return await mutate(postCode)
        .unwrap()
        .then((resp) => {
          return resp;
        });
    } catch (err: any) {
      console.error("Notifications not saved.");
      throw err;
    }
  };
  const disLike: LikePostFunction = async (postCode) => {
    try {
      return await dislike(postCode)
        .unwrap()
        .then((resp) => {
          return resp;
        });
    } catch (err: any) {
      console.error("Notifications not saved.");
      throw err;
    }
  };

  return {
    Like,
    disLike,
    publish,
    puclishRecipeResult,
    likeResult,
    disLikeResult,
  };
};
