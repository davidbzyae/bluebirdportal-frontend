import { AccountControls, User } from "@/features/auth/";
import { Box, Typography } from "@mui/material";

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
    <Box
      sx={{
        px: { xs: 2, sm: 4 },

        height: "100px",

        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" fontSize={32} fontWeight={500}>
        {title}
      </Typography>
      <Box ml="auto">
        <AccountControls user={dummyUser} />
      </Box>
    </Box>
  );
};
