import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { Header } from "../Components/Header/header";
import { Theme } from "../Theme";
import PostCard from "./Card";
import { recipe1 } from "../assets/mockedData";

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
