import { Box, SxProps } from "@mui/material";

import React from "react";

type ContentProps = {
  children?: React.ReactNode;
  sx?: SxProps;
};

export const Content = ({ children, sx }: ContentProps) => {
  return (
    <Box
      position="relative"
      maxWidth="1700px"
      mx="auto"
      sx={{ overflowX: { xs: "hidden", sm: "inherit" }, ...sx }}
      p={{ xs: 2, sm: 4, md: 4, lg: 8 }}
    >
      {children}
    </Box>
  );
};
