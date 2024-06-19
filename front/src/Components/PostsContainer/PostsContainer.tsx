import styled from "styled-components";
import { useGetPostsQuery } from "../../services/postsService";
import PostCard from "../Card";
import { useContext } from "react";
import { ApplicationContext } from "../Application";

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PostsContainer = () => {
  const { user } = useContext(ApplicationContext);

  const { data: posts = [] } = useGetPostsQuery(user?.userCode ?? 0, {
    skip: !localStorage.getItem("userCode"),
  });

  return (
    <Cards>
      {posts.map((post) => (
        <PostCard recipe={post} />
      ))}
    </Cards>
  );
};
