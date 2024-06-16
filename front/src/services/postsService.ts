import axios from "axios";

export const PostServices = () => {
  const getPosts = (token: string) =>
    axios.get("http://localhost:8080/posts/0", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

  return { getPosts };
};
