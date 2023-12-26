import React from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  TextField,
  Typography,
  List,
  ListItem,
  Divider,
  Fab,
  Paper,
  ListItemText,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import MicIcon from "@mui/icons-material/Mic";

const ChatSection = styled("div")(({ theme }) => ({
  width: "100%",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const MessageArea = styled(List)(({ theme }) => ({
  height: "100%",
  overflowY: "auto",
  padding: theme.spacing(2),
}));

const MessageBubble = styled(Paper)(({ theme, align }) => ({
  maxWidth: "75%",
  padding: theme.spacing(1),
  margin: theme.spacing(1),
  backgroundColor:
    align === "right"
      ? theme.palette.primary.light
      : theme.palette.background.paper,
  borderRadius: "20px",
  wordWrap: "break-word",
  boxShadow: theme.shadows[1],
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiListItemText-primary": {
    fontWeight: "bold",
  },
  "& .MuiListItemText-secondary": {
    fontSize: "0.75rem",
    paddingTop: "4px",
  },
}));

const StyledListItemText = styled(ListItemText)(({ align }) => ({
  textAlign: align,
}));

const Chat: React.FC = () => {
  return (
    <ChatSection>
      <Typography variant="h5" sx={{ padding: 2, fontWeight: "bold" }}>
        HR Bot
      </Typography>
      <MessageArea>
        <ListItem key="1" sx={{ justifyContent: "flex-end" }}>
          <MessageBubble align="right">
            <StyledListItemText
              primary="/start"
              secondary="09:30"
              align="right"
            />
          </MessageBubble>
        </ListItem>
        <ListItem key="2" sx={{ justifyContent: "flex-start" }}>
          <MessageBubble align="left">
            <StyledListItemText
              primary="Hey, Nick! What is love ?"
              secondary="09:31"
              align="left"
            />
          </MessageBubble>
        </ListItem>
        <ListItem key="3" sx={{ justifyContent: "flex-end" }}>
          <MessageBubble align="right">
            <StyledListItemText
              primary="Baby don't hurt me, don't hurt me no more!"
              secondary="10:30"
              align="right"
            />
          </MessageBubble>
        </ListItem>
      </MessageArea>
      <Divider />
      <Grid container style={{ padding: "20px" }} alignItems="center">
        <Grid item xs={10}>
          <TextField
            id="outlined-basic-email"
            label="Type Something"
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={1}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Fab color="primary" aria-label="send">
            <SendIcon />
          </Fab>
        </Grid>
        <Grid
          item
          xs={1}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Fab color="primary" aria-label="record">
            <MicIcon />
          </Fab>
        </Grid>
      </Grid>
    </ChatSection>
  );
};

export default Chat;
