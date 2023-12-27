import { AccountControls, User } from "@/features/auth/";
import { Box, Typography } from "@mui/material";

import { MobileBlurBar } from ".";

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  const dummyUser: User = {
    role: "admin",
    thumbnail: "/portal/dummyUserThumbnail.jpg",
    username: "Ronny",
  };

  return (
    <>
      <MobileBlurBar
        title={title}
        fadeTrigger={{ bar: 1, title: 48 }}
        displayBackButton={false}
      />
      <Box
        sx={{
          pt: { xs: "calc(48px + env(safe-area-inset-top))", sm: 0 },

          px: { xs: 2, sm: 4 },

          height: { xs: "fit-content", sm: "100px" },

          display: "flex",
          alignItems: "center",

          zIndex: 2,
        }}
      >
        <Typography variant="h1" fontSize={32} fontWeight={500}>
          {title}
        </Typography>
        <Box ml="auto">
          <AccountControls user={dummyUser} />
        </Box>
      </Box>
    </>
  );
};
