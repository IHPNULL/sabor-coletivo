import React from "react"
import { PageTitle, StyledHeader,AvatarDiv } from "./styledHeader"
import { Avatar, Button, Typography } from "@mui/material"
import CreateIcon  from '@mui/icons-material/Create';

import AvatarImg from '../../assets/1.png';

export const Header = () => {
    return (
    <StyledHeader>
        <AvatarDiv>
            <Avatar alt="Remy Sharp" src={AvatarImg} />
            <Typography variant="body1">Olá Fulano</Typography>
        </AvatarDiv>
        <PageTitle>Sabor Coletivo</PageTitle>
        <Button variant="contained" endIcon={<CreateIcon />}>
            Publish
        </Button>
    </StyledHeader>
    )
}