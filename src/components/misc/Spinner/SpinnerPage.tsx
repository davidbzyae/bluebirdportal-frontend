import { Box } from "@mui/material";
import React from "react";
import { Spinner } from "./Spinner";

interface SpinnerPageOptions extends React.ComponentProps<typeof Box> {
  fadeInDelay?: number;
}

export const SpinnerPage = ({ fadeInDelay, sx }: SpinnerPageOptions) => {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        ...sx,
      }}
    >
      <Spinner fadeInDelay={fadeInDelay} />
    </Box>
  );
};
