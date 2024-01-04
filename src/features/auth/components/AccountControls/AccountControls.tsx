import { Box } from "@mui/material";
import { NotificationsButton } from "./NotificationsButton";
import { ProfileButton } from "./ProfileButton";
import { useUser } from "@/features/auth";

export const AccountControls = () => {
  const user = useUser();

  if (!user.data) return null;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <NotificationsButton />
        <ProfileButton user={user.data} />
      </Box>
    </>
  );
};
