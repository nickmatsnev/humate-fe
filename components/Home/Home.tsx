import { FunctionComponent } from "react";
import React from "react";
import { useRouter } from "next/router";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import ReviewsIcon from "@mui/icons-material/Reviews";
import PlusOneIcon from "@mui/icons-material/PlusOne";
import ViewAgendaRoundedIcon from "@mui/icons-material/ViewAgendaRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import ChatIcon from "@mui/icons-material/Chat";
import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Dashboard from "../Dashboard/Dashboard";
import Chat from "../Chat/Chat";
import { SettingDialog } from "../Settings/Settings";
import ViewJob from "../Job/viewJob";
import CreateJob from "../Job/createJob";
import Landing from "../Landing/Landing";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://sifox.com/">
        Sifox
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function Home() {
  const router = useRouter();
  const [selectedComponent, setSelectedComponent] = React.useState("dashboard");

  const [isSettingDialogOpen, setIsSettingDialog] =
    React.useState<boolean>(false);

  const handleCreateJobSubmit = () => {};

  const renderComponent = () => {
    switch (selectedComponent) {
      case "dashboard":
        return <Dashboard />;
      case "chat":
        return <Chat />;
      case "createJob":
        return <CreateJob onSubmit={handleCreateJobSubmit} />;
      case "viewJob":
        return (
          <ViewJob
            title="Developer Job"
            description="Good well-paid position"
            location="Prague" /* will be replaced id from backend in future */
          />
        );
      case "landing":
        return <Landing />;
      // add Jobs,
      default:
        return <Landing />;
    }
  };

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <SettingDialog
        open={isSettingDialogOpen}
        onClose={() => {
          setIsSettingDialog(false);
        }}
      />
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              px: [3],
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Humate Tech - admin
            </Typography>
            <IconButton color="inherit" sx={{ borderRadius: "5px" }}>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "blue", color: "white" }}>U</Avatar>
              </ListItemAvatar>
              <ListItemText primary="User Name" secondary="user@email.com" />
            </IconButton>

            <IconButton
              color="inherit"
              onClick={() => router.push("/auth/login")}
            >
              <Badge badgeContent={4} color="secondary">
                <LogoutIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <Typography variant="h6" noWrap component="div">
              Some logo
            </Typography>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <List component="nav">
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText
                primary="Chat settings"
                onClick={() => setIsSettingDialog(true)}
              />
            </ListItemButton>
            <ListItemButton onClick={() => setSelectedComponent("chat")}>
              <ListItemIcon>
                <ChatIcon />
              </ListItemIcon>
              <ListItemText primary="Chat sandbox" />
            </ListItemButton>
            <ListItemButton onClick={() => setSelectedComponent("dashboard")}>
              <ListItemIcon>
                <ReviewsIcon />
              </ListItemIcon>
              <ListItemText primary="Results" />
            </ListItemButton>
            <ListItemButton onClick={() => setSelectedComponent("createJob")}>
              <ListItemIcon>
                <PlusOneIcon />
              </ListItemIcon>
              <ListItemText primary="Create Job Position" />
            </ListItemButton>
            <ListItemButton onClick={() => setSelectedComponent("viewJob")}>
              <ListItemIcon>
                <ViewAgendaRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="View Job Position" />
            </ListItemButton>
            <ListItemButton onClick={() => setSelectedComponent("landing")}>
              <ListItemIcon>
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Landing Page" />
            </ListItemButton>
          </List>
          <Divider />
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {renderComponent()}
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Home;
