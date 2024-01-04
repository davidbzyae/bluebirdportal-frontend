import { Box, Button, useMediaQuery } from "@mui/material";

import { FontIcon } from "@/components";
import { MenuCTAButton } from "@/features/menus";
import { theme } from "@/styles";

type MenuCTAButtonsOptions = {
  variant?: "sheet" | "context";
  buttons: MenuCTAButton[];
};

export const MenuCTAButtons = ({ variant, buttons }: MenuCTAButtonsOptions) => {
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  variant = variant || (xs ? "sheet" : "context");

  return (
    <Box
      sx={{
        borderTop:
          variant == "context" ? "1px solid rgb(229, 229, 229)" : "none",

        pt: variant == "sheet" ? 0 : 2,
        pb: variant == "sheet" ? 2 : 2,

        px: variant == "sheet" ? 2 : 2,

        display: "flex",
        gap: variant == "sheet" ? 1 : 1.5,
      }}
    >
      {buttons.map((button, i) => (
        <Button
          key={i}
          variant={button.variant}
          size={variant == "sheet" ? "medium" : "small"}
          sx={{
            width: "100%",
            gap: variant == "sheet" ? 2 : 1.5,

            textTransform: "none",
            fontSize: 16,

            borderRadius: "8px",

            ...(variant == "sheet" && {
              ...(i == 0 && {
                borderTopLeftRadius: "24px",
                borderBottomLeftRadius: "24px",
              }),
              ...(i == buttons.length - 1 && {
                borderTopRightRadius: "24px",
                borderBottomRightRadius: "24px",
              }),
            }),

            ...button.sx,
          }}
        >
          <FontIcon icon={button.icon} size={16} />
          {button.title}
        </Button>
      ))}
    </Box>
  );
};
