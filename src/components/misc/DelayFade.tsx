import { Box, Fade, SxProps } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";

export type DelayFadeProps = Omit<
  React.ComponentProps<typeof Fade>,
  "children"
> & {
  children?: ReactNode;
  delay?: number;
  resetDependency?: any | [any];
  sx?: SxProps;
};

export const DelayFade = (props: DelayFadeProps) => {
  const { delay = 0, resetDependency, children, sx, ...other } = props;

  const [isIn, setIsIn] = useState(delay === 0);

  useEffect(() => {
    const timeout = setTimeout(() => setIsIn(true), delay);

    return () => clearTimeout(timeout);
  }, [resetDependency]);

  return (
    <Fade {...other} in={isIn}>
      <Box sx={sx}>{children}</Box>
    </Fade>
  );
};
