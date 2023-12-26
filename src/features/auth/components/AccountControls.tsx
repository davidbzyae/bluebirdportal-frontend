import { Avatar, Box, Button, Typography, useMediaQuery } from "@mui/material";

import { FontIcon } from "@/components";
import { User } from "@/features/auth";
import { theme } from "@/styles";

type AccountControlsOptions = {
  user: User;
};

export const AccountControls = ({ user }: AccountControlsOptions) => {
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <>
      <Button
        size={xs ? "medium" : "large"}
        sx={{
          pl: xs ? 1 : 1.25,
        }}
      >
        <Avatar
          sx={{ height: { xs: 30, sm: 32 }, width: { xs: 30, sm: 32 } }}
          alt={`${user.username}'s profile`}
          src={user.thumbnail}
        />
        {!xs && (
          <Box component="span" mr={0.5} textTransform="none">
            <Typography fontWeight={500} mb={-0.5}>
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
        <FontIcon icon="zi-angle-down" size={xs ? 10 : 12} />
      </Button>
    </>
  );
};
