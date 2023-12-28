import {
  Box,
  IconButton,
  SxProps,
  Typography,
  alpha,
  darken,
  useMediaQuery,
} from "@mui/material";
import { MenuOption, MenuOptionsList, useMenu } from "@/features/menus";
import { palette, theme } from "@/styles";

import { FontIcon } from "@/components";
import { useScroll } from "@/hooks";

type MoreButtonOptions = {
  icon?: string;
  options?: MenuOption[];
};

const MoreButton = ({ icon, options = [] }: MoreButtonOptions) => {
  const optionsSheet = useMenu({ variant: "sheet" });

  const displayOptions = options.length > 0;

  return (
    <>
      <optionsSheet.Element {...optionsSheet.elementProps}>
        <MenuOptionsList variant="sheet" items={options} />
      </optionsSheet.Element>
      <Box minWidth="40px">
        {displayOptions && (
          <IconButton
            onClick={optionsSheet.open}
            disableRipple
            sx={{
              "&:active": {
                opacity: 0.5,
              },
            }}
          >
            <FontIcon size={18} icon={icon || "fi-rr-menu-dots-vertical"} />
          </IconButton>
        )}
      </Box>
    </>
  );
};

type MobileBlurBarOptions = {
  fadeTrigger?: { bar: number; title?: number };
  title?: string;
  options?: MenuOption[];
  displayBackButton?: boolean;
  sx?: SxProps;
};

export const MobileBlurBar = ({
  fadeTrigger = { bar: 0 },
  title,
  options,
  displayBackButton = true,
  sx,
}: MobileBlurBarOptions) => {
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  const { y } = useScroll();

  if (!xs) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,

        pt: "env(safe-area-inset-top)",
        pl: 1,
        pr: 2,

        height: "calc(48px + env(safe-area-inset-top))",

        display: "flex",
        alignItems: "center",

        zIndex: 3,

        ":before": {
          content: "''",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,

          bgcolor: alpha(darken(palette.background, 0.032), 0.9),
          outline: `1px solid ${darken(palette.background, 0.1)}`,

          backdropFilter: "blur(20px)",

          zIndex: -1,

          opacity: 0,
          ...(y >= fadeTrigger.bar && {
            opacity: 1,
          }),
        },

        ...sx,
      }}
    >
      <Box minWidth="40px">
        {displayBackButton && (
          <IconButton
            onClick={() => history.back()}
            disableRipple
            sx={{
              "&:active": {
                opacity: 0.5,
              },
            }}
          >
            <FontIcon icon="zi-angle-backward" size={18} />
          </IconButton>
        )}
      </Box>

      <Typography
        width="100%"
        textAlign="center"
        fontSize={17}
        fontWeight={500}
        noWrap
        sx={{
          px: "20vw",
          opacity: fadeTrigger.title ? 0 : 1,

          transition: fadeTrigger.title ? ".3s" : "0s",

          ...(fadeTrigger.title &&
            y >= fadeTrigger.title && {
              opacity: 1,
              px: 2.5,
            }),
        }}
      >
        {title}
      </Typography>
      <MoreButton options={options} />
    </Box>
  );
};
