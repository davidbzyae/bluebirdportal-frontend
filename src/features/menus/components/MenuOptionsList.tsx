import { Button, Stack, useMediaQuery } from "@mui/material";

import { FontIcon } from "@/components";
import { MenuOption } from "..";
import { theme } from "@/styles";

type MenuOptionsListOptions = {
  variant?: "sheet" | "context";
  items: MenuOption[];
};

export const MenuOptionsList = ({ variant, items }: MenuOptionsListOptions) => {
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  variant = variant || (xs ? "sheet" : "context");

  return (
    <Stack
      sx={{
        py: variant == "sheet" ? 2 : 0.5,
        px: variant == "context" ? 0.5 : 0,
      }}
    >
      {items.map((item) => (
        <Button
          key={item.title}
          id={!item.persistOnClick ? "closeOnClickOption" : undefined}
          onClick={item.onClick}
          disabled={item.disabled}
          fullWidth
          sx={{
            py: variant == "sheet" ? 3 : 1,
            px: variant == "sheet" ? "30px" : 2,

            justifyContent: "left",
            gap: variant == "sheet" ? "26px" : 2,

            borderRadius: variant == "context" ? "8px" : 0,
            fontSize: variant == "sheet" ? 16 : 14,
            fontWeight: "500",
            textTransform: "none",

            ...(variant == "context" && {
              "&:not(&:last-child)": {
                borderBottom: "1px solid rgba(255,255,255,.05)",
              },
            }),

            ...item.sx,
          }}
        >
          <FontIcon
            icon={item.icon || ""}
            size={variant == "sheet" ? 20 : 16}
            sx={{
              width: variant == "sheet" ? 20 : 16,
            }}
          />
          {item.title}
        </Button>
      ))}
    </Stack>
  );
};
