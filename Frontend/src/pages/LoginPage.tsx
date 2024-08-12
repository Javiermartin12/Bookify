import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { UserInterface } from "../interfaces/userInterface";

const LoginPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0<UserInterface>();

  return (
    <>
      <Box sx={{ padding: "1rem", height: "100%", width: "100%" }}>
        <Typography variant="h1" color="aliceblue" gutterBottom>
          Bookify
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            width: "100%",
            padding: "1rem",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ margin: "1rem", height: "3rem", width: "7rem" }}
            onClick={() => loginWithRedirect()}
          >
            Log In
          </Button>
          <Typography variant="h6" color="aliceblue" gutterBottom>
            Please log in to continue
          </Typography>
        </Box>
      </Box>
    </>
  );
};
export default LoginPage;
