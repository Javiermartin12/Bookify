import { useAuth0 } from "@auth0/auth0-react";
import { Box, Button } from "@mui/material";
import React from "react";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();

  return (
    <Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() =>
          logout({ logoutParams: { returnTo: `${window.location.origin}/` } })
        }
      >
        Log Out
      </Button>
    </Box>
  );
};

export default LogoutButton;
