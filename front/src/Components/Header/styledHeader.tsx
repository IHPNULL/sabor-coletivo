import styled from "styled-components";

export const StyledHeader = styled.div`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-around;
  /* background-color: ${(props) => props.theme.palette.secondary.dark}; */
  align-items: baseline;
`;

export const AvatarDiv = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  p {
    font-family: "Road Rage", sans-serif;
    font-size: 22pt;
  }
`;

export const PageTitle = styled.h1`
  color: ${(props) => props.theme.palette.primary};
  font-family: Lemonada;
`;
