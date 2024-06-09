import styled, { ThemeProvider } from "styled-components";

import { Header } from "../Components/Header/header";
import { Theme } from "../Theme";
import { recipe1 } from "../assets/mockedData";
import { getPosts } from "../services/postsService";
import PostCard from "./Card";
import { useEffect, useState } from "react";

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
`

function Main() {
  const [posts, setPosts] = useState()

  useEffect( () => {
    getPosts().then(({data}) => setPosts(data))
}, []);

  console.log(posts)
  return (
    <ThemeProvider theme={Theme}>
      <App>
        <Header />
        <Cards>
          <PostCard recipe={recipe1} />
        </Cards>
      </App>
    </ThemeProvider>
  );
}

export default Main;
