import { IconButton, useMediaQuery } from "@mui/material";

import { FontIcon } from "@/components";
import { theme } from "@/styles";
import { useMenu } from "@/features/menus";

export const NotificationsButton = () => {
  const xs = useMediaQuery(theme.breakpoints.only("xs"));

  const notificationsPopup = useMenu({ variant: xs ? "sheet" : "popup" });

  return (
    <>
      <notificationsPopup.Element {...notificationsPopup.elementProps}>
        a
      </notificationsPopup.Element>
      <IconButton id="button:notifications" onClick={notificationsPopup.open}>
        <FontIcon icon="fi-rr-bell" size={20} />
      </IconButton>
    </>
  );
};
