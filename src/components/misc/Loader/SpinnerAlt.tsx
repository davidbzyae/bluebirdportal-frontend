import {
  Box,
  CircularProgress,
  CircularProgressProps,
  alpha,
  circularProgressClasses,
} from "@mui/material";

import { DelayFade } from "@/components";
import { palette } from "@/styles";

interface SpinnerAltProps extends React.ComponentProps<typeof Box> {
  color?: string;
  size?: number;
  fadeInDelay?: number;
}

export const SpinnerAlt = ({
  color = palette.primary,
  size = 40,
  fadeInDelay,
  sx,
  ...other
}: SpinnerAltProps) => {
  return (
    <DelayFade {...other}>
      <Box
        sx={{
          position: "relative",

          ...sx,
        }}
      >
        <CircularProgress
          variant="determinate"
          sx={{
            color: alpha(color, 0.15),
          }}
          size={size}
          thickness={5}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          sx={{
            color,
            animationDuration: "550ms",
            position: "absolute",
            left: 0,
            [`& .${circularProgressClasses.circle}`]: {
              strokeLinecap: "round",
            },
          }}
          size={size}
          thickness={5}
        />
      </Box>
    </DelayFade>
  );
};
