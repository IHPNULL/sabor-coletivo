import styled from "styled-components";
import { useGetPostsQuery } from "../../services/postsService";
import PostCard from "../Card";
import { useContext, useEffect } from "react";
import { ApplicationContext } from "../Application";

const Cards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;
`;

export const PostsContainer = () => {
  const { user } = useContext(ApplicationContext);

  const {
    data: posts = [],
    refetch,
    isUninitialized,
  } = useGetPostsQuery(user?.userCode ?? 0, {
    skip: !localStorage.getItem("userCode"),
  });

  useEffect(() => {
    if (!isUninitialized) {
      refetch();
    }
  }, [isUninitialized]);

  return (
    <Cards>
      {posts.map((post) => (
        <PostCard recipe={post} />
      ))}
    </Cards>
  );
};
