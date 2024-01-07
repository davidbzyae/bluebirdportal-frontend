import { Box, useMediaQuery } from "@mui/material";
import { DelayFade, ProgressiveImage, SpinnerAlt } from "..";

import { theme } from "@/styles";

export const LogoLoader = () => {
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 6,
      }}
    >
      <ProgressiveImage
        width={256}
        src={`https://zyae.net/assets/images/brand/bluebird/${
          xs ? "bluebirdFull" : "bluebirdFull"
        }.svg`}
      />
      <DelayFade delay={2500} sx={{ transition: "500ms !important" }}>
        <SpinnerAlt />
      </DelayFade>
    </Box>
  );
};
