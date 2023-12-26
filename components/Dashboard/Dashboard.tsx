import * as React from "react";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Interviews from "./Interviews";

export default function Dashboard() {
  const router = useRouter();
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Grid container spacing={3}>
        {/* Recent Interviews */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Interviews />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
