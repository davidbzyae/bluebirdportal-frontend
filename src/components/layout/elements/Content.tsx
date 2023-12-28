import { Box, SxProps } from "@mui/material";

import React from "react";

type ContentOptions = {
  gutterTop?: boolean;
  children?: React.ReactNode;
  sx?: SxProps;
};

export const Content = ({ gutterTop, children, sx }: ContentOptions) => {
  return (
    <Box
      position="relative"
      maxWidth="1700px"
      mx="auto"
      sx={{ overflowX: { xs: "hidden", sm: "inherit" }, ...sx }}
      p={{ xs: 2, sm: 4 }}
      pt={{ xs: 2, sm: 1 }}
      mt={gutterTop ? 5 : 0}
    >
      {children}
    </Box>
  );
};
