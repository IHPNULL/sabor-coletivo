import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { Header } from "../Components/Header/header";
import { Theme } from "../Theme";
import PostCard from "./Card";

const App = styled.div`
  display: flex;

  width: 100%;
  height: 100%;

  background-color: ${(props) => props.theme.backgroundColor};
`;

function Main() {
  return (
    <ThemeProvider theme={Theme}>
      <App>
        <Header />
        <PostCard />
      </App>
    </ThemeProvider>
  );
}

export default Main;
