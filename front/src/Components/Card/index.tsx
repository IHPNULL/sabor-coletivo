import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import AddIcon from "@mui/icons-material/Add";
import ShareIcon from "@mui/icons-material/Share";
import { Stack, Tooltip } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { useMemo, useState } from "react";
import PuddingImage from "../../assets/pudding.png";
import { usePost } from "../../hooks/postHooks";
import { RecipeType } from "../../types/recipeType";
import { extendedApiLoginSlice } from "../../services/loginService";

interface PostCardType {
  recipe: RecipeType;
}

export default function PostCard(props: PostCardType) {
  const [liked, setLiked] = useState(false);
  const { Like, disLike, likeResult, disLikeResult } = usePost();

  const { data: _user } = extendedApiLoginSlice.useGetUserDataQuery("0");

  const likes = useMemo(
    () =>
      liked
        ? likeResult?.data?.likes ?? props.recipe.likes
        : disLikeResult?.data?.likes ?? props.recipe.likes,
    [likeResult, disLikeResult, liked, props.recipe.likes]
  );

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      disLike(props.recipe._id ?? "");
    } else {
      setLiked(true);
      Like(props.recipe._id ?? "");
    }
  };

  return (
    <Card variant="outlined" sx={{ minWidth: 500, maxWidth: 500 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            src={_user?.profilePic ?? "src/assets/1.png"}
            aria-label="recipe"
          >
            {_user?.name}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={props.recipe.title}
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="270"
        image={PuddingImage}
        alt="Default image"
      />
      <CardContent>
        <Stack>
          <Typography variant="body2" color="text.secondary">
            <ul>
              {props.recipe.ingredients.map((ingredient) => {
                return <li>{ingredient}</li>;
              })}
            </ul>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.recipe.steps}
          </Typography>
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={() => handleLike()} aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        {likes}
        <IconButton disabled aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton disabled aria-label="share">
          <ModeCommentIcon />
        </IconButton>
        <Tooltip title="Adicionar receita para sua lista">
          <span>
            <IconButton disabled aria-label="share">
              <AddIcon />
            </IconButton>
          </span>
        </Tooltip>
      </CardActions>
    </Card>
  );
}
