import {
  Avatar,
  Box,
  Button,
  Typography,
  alpha,
  colors,
  useMediaQuery,
} from "@mui/material";
import { MenuCTAButtons, MenuOptionsList, useMenu } from "@/features/menus";
import { palette, theme, translucentButtonStyle } from "@/styles";

import { FontIcon } from "@/components";
import { User } from "../..";

type ProfileButtonOptions = {
  user: User;
};

export const ProfileButton = ({ user }: ProfileButtonOptions) => {
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  const accountControlsMenu = useMenu();

  return (
    <>
      <accountControlsMenu.Element {...accountControlsMenu.elementProps}>
        <MenuOptionsList
          items={[
            {
              icon: "fi fi-rr-bell",
              title: "Notifications",
              onClick: () => {},
              disabled: false,
              persistOnClick: false,
            },
            {
              icon: "fi fi-rr-marker",
              title: "Switch location",
              onClick: () => {},
              disabled: false,
              persistOnClick: false,
            },
          ]}
        />
        <MenuCTAButtons
          buttons={[
            {
              icon: "fi fi-rr-exit",
              title: "Sign out",
              onClick: () => {},
              persistOnClick: false,
              sx: translucentButtonStyle(colors.red["A200"]),
            },
            {
              icon: "fi fi-rr-edit",
              title: "Edit profile",
              onClick: () => {},
              persistOnClick: false,
              sx: translucentButtonStyle(palette.primary),
            },
          ]}
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
          <Box component="span" textTransform="none" textAlign="left" mr={0.5}>
            <Typography fontWeight={500} mt={-0.25} mb={-0.5} fontSize={15}>
              {user.username}
            </Typography>
            <Typography fontSize={12} textTransform="capitalize">
              {user.role}
            </Typography>
          </Box>
        )}

        <FontIcon icon="fi fi-sr-sort-down" size={xs ? 12 : 16} />
      </Button>
    </>
  );
};
