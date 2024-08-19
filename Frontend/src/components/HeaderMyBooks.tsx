import { Box, Typography } from "@mui/material";
import { headerMyBook, title } from "../theme/materialUI/headerMyBooks";

export const HeaderMyBooks: React.FC = () => {
  return (
    <>
      <Box sx={headerMyBook}>
        <Typography sx={title} variant="h4">
          My books created
        </Typography>
      </Box>
    </>
  );
};
