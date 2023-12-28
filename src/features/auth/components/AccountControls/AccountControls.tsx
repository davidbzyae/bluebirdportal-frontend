import { Box } from "@mui/material";
import { NotificationsButton } from "./NotificationsButton";
import { ProfileButton } from "./ProfileButton";
import { User } from "../..";

const dummyUser: User = {
  role: "accounting admin",
  thumbnail: "/portal/dummyUserThumbnail.jpg",
  username: "Ronny",
};

export const AccountControls = () => {
  const user = dummyUser;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <NotificationsButton />
        <ProfileButton user={user} />
      </Box>
    </>
  );
};
