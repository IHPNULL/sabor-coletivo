import CreateIcon from "@mui/icons-material/Create";
import { Avatar, Button, Typography } from "@mui/material";
import { AvatarDiv, PageTitle, StyledHeader } from "./styledHeader";

import { Link } from "react-router-dom";
import AvatarImg from "../../assets/1.png";
import { useAppSelector } from "../../hooks/AppStoreHooks";
import { selectUserProfile } from "../../reducers/userProfileSlice";

export const Header = () => {
  const user = useAppSelector(selectUserProfile);

  return (
    <StyledHeader>
      <AvatarDiv>
        <Avatar alt="Remy Sharp" src={AvatarImg} />
        <Typography variant="body1">Olá {user.name}</Typography>
      </AvatarDiv>
      <PageTitle>Sabor Coletivo</PageTitle>
      <Link to="publicar">
        <Button variant="contained" endIcon={<CreateIcon />}>
          Publish
        </Button>
      </Link>
    </StyledHeader>
  );
};
