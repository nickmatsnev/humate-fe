import React from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  TextField,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Fab,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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

const Chat: React.FC = () => {
  return (
    <ChatSection>
      <Typography variant="h5" sx={{ padding: 2, fontWeight: "bold" }}>
        Chat
      </Typography>
      <MessageArea>
        <ListItem key="1">
          <Grid container>
            <Grid item xs={12}>
              <ListItemText align="right" primary="Hey man, What's up ?" />
            </Grid>
            <Grid item xs={12}>
              <ListItemText align="right" secondary="09:30" />
            </Grid>
          </Grid>
        </ListItem>
        <ListItem key="2">
          <Grid container>
            <Grid item xs={12}>
              <ListItemText
                align="left"
                primary="Hey, Iam Good! What about you ?"
              />
            </Grid>
            <Grid item xs={12}>
              <ListItemText align="left" secondary="09:31" />
            </Grid>
          </Grid>
        </ListItem>
        <ListItem key="3">
          <Grid container>
            <Grid item xs={12}>
              <ListItemText
                align="right"
                primary="Cool. i am good, let's catch up!"
              />
            </Grid>
            <Grid item xs={12}>
              <ListItemText align="right" secondary="10:30" />
            </Grid>
          </Grid>
        </ListItem>
      </MessageArea>
      <Divider />
      <Grid container style={{ padding: "20px" }} alignItems="center">
        <Grid item xs={11}>
          <TextField
            id="outlined-basic-email"
            label="Type Something"
            fullWidth
          />
        </Grid>
        <Grid item xs={1}>
          <Fab color="primary" aria-label="send">
            <SendIcon />
          </Fab>
        </Grid>
      </Grid>
    </ChatSection>
  );
};

export default Chat;
