import React from "react";
import { Box, Container, Typography, Paper, Grid } from "@mui/material";

const Landing: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box mt={4} mb={4}>
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to Humate Tech
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Discover a place where you can find everything you need to grow.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" component="h3">
              Innovation
            </Typography>
            <Typography>
              Cutting-edge solutions to drive your business forward.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" component="h3">
              Collaboration
            </Typography>
            <Typography>
              Join a community of forward-thinkers and problem-solvers.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h5" component="h3">
              Growth
            </Typography>
            <Typography>
              Resources and tools that help you build and scale.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Landing;
