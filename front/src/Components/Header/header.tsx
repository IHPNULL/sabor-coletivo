import CreateIcon from "@mui/icons-material/Create";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Avatar, Button, IconButton, Typography } from "@mui/material";
import { AvatarDiv, PageTitle, StyledHeader } from "./styledHeader";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AvatarImg from "../../assets/1.png";
import { ApplicationContext } from "../Application";

export const Header = () => {
  const navigate = useNavigate();
  const { user } = useContext(ApplicationContext);

  return (
    <StyledHeader>
      <AvatarDiv>
        <IconButton
          onClick={() => {
            localStorage.clear();
            navigate("/login");
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Avatar alt="Remy Sharp" src={AvatarImg} />
        <Typography variant="body1">Olá {user?.name}</Typography>
      </AvatarDiv>
      <PageTitle>Sabor Coletivo</PageTitle>
      <Link to="/publicar">
        <Button variant="contained" endIcon={<CreateIcon />}>
          Publish
        </Button>
      </Link>
    </StyledHeader>
  );
};
