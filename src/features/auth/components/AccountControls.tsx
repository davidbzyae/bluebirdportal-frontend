import { Avatar, Box, Button, Typography, useMediaQuery } from "@mui/material";
import { OptionsList, useMenu } from "@/features/menus";
import { palette, theme } from "@/styles";

import { FontIcon } from "@/components";
import { User } from "../types";

type AccountControlsOptions = {
  user: User;
};

export const AccountControls = ({ user }: AccountControlsOptions) => {
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  const accountControlsMenu = useMenu({
    variant: "popover",
  });

  return (
    <>
      <accountControlsMenu.Element {...accountControlsMenu.elementProps}>
        <OptionsList
          items={[
            {
              icon: "fi fi-rr-exit",
              title: "Log out",
              onClick: () => {},
              disabled: false,
              persistOnClick: false,
              sx: {
                "&:hover": {
                  color: palette.error,
                },
              },
            },
            {
              icon: "fi fi-rr-marker",
              title: "Switch location",
              onClick: () => {},
              disabled: false,
              persistOnClick: false,
            },
          ]}
          variant={"popover"}
        />
      </accountControlsMenu.Element>
      <Button
        size={xs ? "medium" : "large"}
        sx={{
          pl: { xs: 0.75, sm: 1.25 },
        }}
        onClick={(e) => accountControlsMenu.open(e)}
      >
        <Avatar
          sx={{ height: { xs: 30, sm: 32 }, width: { xs: 30, sm: 32 } }}
          alt={`${user.username}'s profile`}
          src={user.thumbnail}
        />
        {!xs && (
          <Box component="span" textTransform="none">
            <Typography fontWeight={500} mt={-0.25} mb={-0.5}>
              {user.username}
            </Typography>
            <Typography
              fontSize={12}
              textAlign="left"
              textTransform="capitalize"
            >
              {user.role}
            </Typography>
          </Box>
        )}
        <FontIcon
          icon={`fi-rr-caret-${accountControlsMenu.isOpen ? "up" : "down"}`}
        />
      </Button>
    </>
  );
};
