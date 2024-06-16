import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PostServices } from "../services/postsService";
import PostCard from "./Card";
import { Header } from "./Header/header";
import { appContext } from "./Main";

const App = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.backgroundColor};
`;

const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Application = () => {
  const { posts, user, setPostsByContext } = useContext(appContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.token) {
      PostServices()
        .getPosts(user.token)
        .then(({ data }) => setPostsByContext(data));
    } else navigate("/login");
  });

  return (
    <App>
      <Header />
      <Cards>
        {posts.map((post) => (
          <PostCard recipe={post} />
        ))}
      </Cards>
    </App>
  );
};
