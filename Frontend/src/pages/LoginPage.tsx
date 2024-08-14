import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { UserInterface } from "../interfaces/userInterface";
import { button, mainBox } from "../theme/materialUI/loginPage";

const LoginPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0<UserInterface>();

  return (
    <>
      <Box sx={{ padding: "1rem", height: "100%", width: "100%" }}>
        <Typography variant="h1" color="aliceblue" gutterBottom>
          Bookify
        </Typography>
        <Box sx={mainBox}>
          <Button
            variant="contained"
            color="primary"
            sx={button}
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
