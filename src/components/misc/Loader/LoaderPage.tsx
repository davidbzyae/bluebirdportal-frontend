import { Box } from "@mui/material";
import { DelayFade } from "..";
import React from "react";

interface LoaderPageOptions extends React.ComponentProps<typeof Box> {
  fadeInDelay?: number;
  loader: JSX.Element;
}

export const LoaderPage = ({
  fadeInDelay,
  loader,
  sx,
  ...other
}: LoaderPageOptions) => {
  return (
    <Box
      {...other}
      sx={{
        height: "100%",
        width: "100%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        ...sx,
      }}
    >
      <DelayFade delay={fadeInDelay}>{loader}</DelayFade>
    </Box>
  );
};
