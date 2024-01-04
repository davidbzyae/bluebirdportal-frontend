import { Box, Button, IconButton, Typography, alpha } from "@mui/material";
import { FontIcon, ProgressiveImage } from "@/components";
import { MenuHeader, useMenu } from "@/features/menus";

import { palette } from "@/styles";

export const NotificationsButton = () => {
  const notificationsPopup = useMenu();

  return (
    <>
      <notificationsPopup.Element {...notificationsPopup.elementProps}>
        <MenuHeader title={"Notifications"} close={notificationsPopup.close} />
        <Box
          sx={{
            p: { xs: 2, sm: 1 },
          }}
        >
          <Box
            sx={{
              p: 2,

              width: { xs: "100%", sm: 300 },

              display: "flex",
              gap: 1,

              bgcolor: alpha(palette.primary, 0.08),

              borderRadius: "12.5px",
            }}
          >
            <ProgressiveImage
              src="/portal/ios/100.png"
              sx={{
                width: { xs: 56, sm: 48 },
                height: { xs: 56, sm: 48 },
                borderRadius: "12.5px",

                border: `1px solid ${alpha(palette.primary, 0.08)}`,
              }}
            />
            <Box
              sx={{
                ml: 1,
              }}
            >
              <Typography fontSize={{ xs: 22, sm: 18 }} fontWeight={500}>
                Welcome to Bluebird
              </Typography>
              <Typography>
                Content content content content content content content content
                content content
              </Typography>
              <Button
                variant="translucent"
                color="primary"
                sx={{
                  mt: 2,
                  ml: "auto",
                }}
              >
                <FontIcon icon="fi fi-rr-trash" />
                Dismiss
              </Button>
            </Box>
          </Box>
        </Box>
      </notificationsPopup.Element>
      <IconButton onClick={notificationsPopup.open}>
        <FontIcon icon="fi fi-rs-bell" size={20} />
      </IconButton>
    </>
  );
};
