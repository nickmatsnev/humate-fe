import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";

interface CreateJob {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const CreateJob: React.FC<CreateJob> = ({ onSubmit }) => {
  return (
    <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
      <Typography variant="h6">Create Job Position</Typography>
      <TextField
        margin="normal"
        required
        fullWidth
        id="title"
        label="Job Title"
        name="title"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="description"
        label="Description"
        id="description"
        multiline
        rows={4}
      />
      <TextField
        margin="normal"
        required
        fullWidth
        name="location"
        label="Location"
        id="location"
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Create
      </Button>
    </Box>
  );
};

export default CreateJob;
