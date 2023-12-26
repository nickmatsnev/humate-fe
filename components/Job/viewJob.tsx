// ViewJob.tsx

import React from "react";
import { Box, Typography } from "@mui/material";

interface ViewJobProps {
  title: string;
  description: string;
  location: string;
}

const ViewJob: React.FC<ViewJobProps> = ({ title, description, location }) => {
  return (
    <Box sx={{ mt: 1 }}>
      <Typography variant="h6">{title}</Typography>
      <Typography>Description: {description}</Typography>
      <Typography>Location: {location}</Typography>
    </Box>
  );
};

export default ViewJob;
