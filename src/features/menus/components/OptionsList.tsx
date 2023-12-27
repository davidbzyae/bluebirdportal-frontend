import { Button, Stack } from "@mui/material";

import { FontIcon } from "@/components";
import { OptionItem } from "..";

export const OptionsList = ({
  variant,
  items,
}: {
  variant: "sheet" | "popover";
  items: OptionItem[];
}) => {
  return (
    <Stack
      sx={{
        py: variant == "sheet" ? 2 : 0.5,
        px: variant == "popover" ? 0.5 : 0,
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

            borderRadius: variant == "popover" ? "12.5px" : 0,
            fontSize: variant == "sheet" ? 14 : 14,
            fontWeight: "500",
            textTransform: "none",

            ...(variant == "popover" && {
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
              minWidth: 20,
            }}
          />
          {item.title}
        </Button>
      ))}
    </Stack>
  );
};
