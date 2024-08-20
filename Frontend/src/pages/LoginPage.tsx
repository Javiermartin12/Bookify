import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { UserInterface } from "../interfaces/userInterface";
import {
  boxTitle,
  boxWelcomePage,
  button,
  logBox,
  mainBox,
} from "../theme/materialUI/loginPage";

const LoginPage: React.FC = () => {
  const { loginWithRedirect } = useAuth0<UserInterface>();

  return (
    <>
      <Box sx={boxTitle}>
        <Typography variant="h1" color="aliceblue" gutterBottom>
          Bookify
        </Typography>
        <Box sx={mainBox}>
          <Box sx={boxWelcomePage}>
            <Typography variant="h5" color="aliceblue">
              Welcome! This is an app where you can recommend the books you like
              and see the books that other people have uploaded. Get started by
              logging in. If you click on the books, you can see their details
              and get a detailed summary of each book along with information
              about the person who published it.
            </Typography>
          </Box>
          <Box sx={logBox}>
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
      </Box>
    </>
  );
};
export default LoginPage;
