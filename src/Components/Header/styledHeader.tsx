import styled from "styled-components";

export const StyledHeader = styled.div`
    display: inline-flex;
    flex-direction: row;
    justify-content: center;    
`
export const PageTitle = styled.h1`
    color: ${props => props.theme.primary};
    font-family: Lemonada;
`