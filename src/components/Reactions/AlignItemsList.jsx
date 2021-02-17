import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "80ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList({ user, text, reviewId, articleId }) {
  const classes = useStyles();
  console.log(reviewId,articleId, "ID FROM ARtiCLES")
  const deleteMethod = {
    method: "DELETE",
    headers: { "Content-type": "application/json" },
  };
  const handleDelete = async () => {
    await fetch("http://localhost:3003/articles/" + reviewId + "/reviews/" + articleId, deleteMethod)
      .then((response) => response.json())
      .then((res) => console.log(res));
  }

  return (
    <List className={classes.root}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt={user} src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={user}
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {text}
              </Typography>
            </React.Fragment>
          }
        />
        <Tooltip title="Delete">
          <IconButton aria-label="delete" onClick={handleDelete}>
            <DeleteIcon  />
          </IconButton>
        </Tooltip>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}
