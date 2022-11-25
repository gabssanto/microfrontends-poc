import React from "react";
import { Box, Typography } from "@mui/material";
// import { Container } from './styles';

const NotFound: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "90vh",
        backgroundColor: "primary.dark",
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404 Page Not Found
      </Typography>
    </Box>
  );
};

export default NotFound;
